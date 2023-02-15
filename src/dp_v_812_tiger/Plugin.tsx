// (C) 2021-2022 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
    IDashboardEventHandling,
    IDashboardWidgetProps,
    newDashboardSection,
    newDashboardItem,
    newCustomWidget,
    changeDateFilterSelection,
    CustomDashboardWidgetComponent,
    useDispatchDashboardCommand,
    clearDateFilterSelection,
    changeAttributeFilterSelection,
    resetAttributeFilterSelection,
    selectFilterContextAttributeFilterByDisplayForm,
    useDashboardSelector,
    ICustomWidget,
    useCustomWidgetExecutionDataView,
    CustomDashboardInsightComponent,
} from "@gooddata/sdk-ui-dashboard";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import entryPoint from "../dp_v_812_tiger_entry";

import React from "react";
import { IAttribute, idRef, IMeasure, IMeasureDefinition, insightTitle, newAttribute, newMeasure } from "@gooddata/sdk-model";
import { max } from "lodash";

function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return <div>Hello from custom widget</div>;
}

const TooltipChart: React.FC = () => {
    return (
                <div className="tooltip-icon gd-icon-circle-question__container">
                    ABCDEF
                </div>
    );
};

const changeFilterDashboard: CustomDashboardWidgetComponent = () => {
    /**
     * Creating necessary commands to dispatch filter selection change related commands.
     */
    const changeDateFilterSelectionCmd = useDispatchDashboardCommand(changeDateFilterSelection);
    const resetDateFilter = useDispatchDashboardCommand(clearDateFilterSelection);
    const changeAttributeFilterSelectionCmd = useDispatchDashboardCommand(changeAttributeFilterSelection);
    const resetAttributeFilter = useDispatchDashboardCommand(resetAttributeFilterSelection);


    const changeDashboardDateFilterSelection = () => {
        changeDateFilterSelectionCmd("relative", "GDC.time.month", -11, 0);
    };

    const changeDateStaticPeriod = () => {
        changeDateFilterSelectionCmd("absolute", "GDC.time.date", "2018-01-14", "2019-12-31");
    };

    const resetDashboardDateFilter = () => {
        resetDateFilter();
    };

    const RegionFilterLocalId = useDashboardSelector(
        selectFilterContextAttributeFilterByDisplayForm(
            idRef("region"),
        ),
    )?.attributeFilter.localIdentifier;

    const changeRegionFilterSelection = () => {
        RegionFilterLocalId &&
            changeAttributeFilterSelectionCmd(
                RegionFilterLocalId,
                {
                    //explore, phoenix
                    uris: [
                        "Midwest",
                        "Northeast",
                    ],
                },
                "IN",
            );
    };

    const resetRegionFilterSelection = () => {
        RegionFilterLocalId && resetAttributeFilter(RegionFilterLocalId);
    };

    return (
        <div>
            <button onClick={changeDashboardDateFilterSelection}>Change date filter selection</button>
            <button onClick={changeDateStaticPeriod}>Change static period</button>
            <button onClick={resetDashboardDateFilter}>Clear date filter selection</button>
            <button onClick={changeRegionFilterSelection}>Change Region selection</button>
            <button onClick={resetRegionFilterSelection}>Reset Region filter</button>
        </div>
    );
};

const simpleCurrencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
});
const sumPrice: IMeasure<IMeasureDefinition> = newMeasure(idRef("sum_of_price", "measure"));
const medianPrice: IMeasure<IMeasureDefinition> = newMeasure(idRef("median_of_price", "measure"));
const region: IAttribute = newAttribute("region");
const MyCustomWidgetWithFilters: CustomDashboardWidgetComponent = ({ widget, LoadingComponent, ErrorComponent }) => {
    const dataViewTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [sumPrice, medianPrice],
            slicesBy: [region],
        },
    });

    if (dataViewTask.status === "pending" || dataViewTask.status === "loading") {
        return <LoadingComponent />;
    }

    if (dataViewTask.status === "error") {
        return <ErrorComponent message={dataViewTask.error.message ?? "Unknown error"} />;
    }

    const data = dataViewTask.result
        .data()
        .slices()
        .toArray()
        .map((slice) => {
            const rawBestcase = slice.dataPoints()[0].rawValue;
            const rawAmount = slice.dataPoints()[1].rawValue;
            return {
                title: slice.descriptor.sliceTitles()[0],
                bestcase: rawBestcase ? parseFloat(rawBestcase.toString()) : 0,
                amount: rawAmount ? parseFloat(rawAmount.toString()) : 0,
            };
        });

    const maxValue = max(data.map((i) => max([i.bestcase, i.amount])))!;

    return (
        <ResponsiveContainer height={240} width="90%">
            <RadarChart data={data}>
                <PolarGrid color="#94a1ad" />
                <PolarAngleAxis dataKey="title" color="#94a1ad" />
                <PolarRadiusAxis
                    angle={90}
                    color="#94a1ad"
                    domain={[0, maxValue]}
                    tickFormatter={simpleCurrencyFormatter.format}
                />
                <Radar name="bop" dataKey="bestcase" stroke="#14b2e2" fill="#14b2e2" fillOpacity={0.6} />
                <Radar
                    name="eop"
                    dataKey="amount"
                    stroke="#00c18e"
                    fill="#00c18e"
                    fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export class Plugin extends DashboardPluginV1 {
    public readonly author = entryPoint.author;
    public readonly displayName = entryPoint.displayName;
    public readonly version = entryPoint.version;
    public readonly minEngineVersion = entryPoint.minEngineVersion;
    public readonly maxEngineVersion = entryPoint.maxEngineVersion;

    public onPluginLoaded(_ctx: DashboardContext, _parameters?: string): Promise<void> | void {
    }

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
        customize.customWidgets().addCustomWidget("changeFilters", changeFilterDashboard);
        customize.customWidgets().addCustomWidget("myWidgetWithFilters", MyCustomWidgetWithFilters);

        customize.filterBar().setRenderingMode("default");

        customize.insightWidgets().withCustomDecorator((insightProvider) => (insight, widget) => {
            const InsightTooltipCustomDecorator: CustomDashboardInsightComponent = (props) => {
                const Insight = insightProvider(insight, widget);
                if (insightTitle(insight) === "date format 2") {
                    return (
                        <>
                            <Insight {...props} />
                            <TooltipChart />
                        </>
                    );
                }
                return <Insight {...props} />;
            };

            return InsightTooltipCustomDecorator;
        });
        
        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(
                0,
                newDashboardSection(
                    "Section Added By Plugin",
                    newDashboardItem(newCustomWidget("myWidget1", "myCustomWidget"), {
                        xl: {
                            gridWidth: 6,
                            gridHeight: 12,
                        },
                    }),
                    // newDashboardItem(
                    //     newCustomWidget("myWidget2", "changeFilters"),
                    //     {
                    //         xl: {gridWidth: 12,gridHeight: 3,},
                    //     },
                    // ),
                ),
            );
            customizer.addItem(
                0, -1,
                newDashboardItem(newCustomWidget("myWidget2", "changeFilters"), {
                    xl: {
                        // all 12 columns of the grid will be 'allocated' for this this new item
                        gridWidth: 6,
                        // minimum height since the custom widget now has just some one-liner text
                        gridHeight: 15,
                    },
                }),
            );
        });

        
        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(
                1,
                newDashboardSection(
                    "filter change",
                    newDashboardItem(
                        newCustomWidget("myWidget3", "myWidgetWithFilters", {
                            // specify which date data set to used when applying the date filter to this widget
                            // if not specified, the date filter is ignored
                            dateDataSet: idRef("date1", "dataSet"), 
                            // specify which attribute filters to ignore for this widget
                            // if empty or not specified, all attribute filters are used
                            ignoreDashboardFilters: [
                                {
                                    type: "attributeFilterReference",
                                    displayForm: idRef("region"),
                                },
                            ],
                        }),
                        {
                            xl: {gridWidth: 6,gridHeight: 12,},
                        },
                    ),
                ),
            );
        });

        handlers.addEventHandler("GDC.DASH/EVT.INITIALIZED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### Dashboard initialized", evt);
        });
    }

    public onPluginUnload(_ctx: DashboardContext): Promise<void> | void {
    }
}


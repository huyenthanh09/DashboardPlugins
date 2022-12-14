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
    IDashboardKpiProps,
    KpiComponentProvider,
    CustomDashboardInsightComponent,
    dashboardAttributeFilterToAttributeFilter,
    IDashboardAttributeFilterProps,
    useParentFilters,
} from "@gooddata/sdk-ui-dashboard";
import { InsightView } from "@gooddata/sdk-ui-ext";

import entryPoint from "../dp_v_812_bear_alpha_entry";

import React, { useMemo } from "react";
import { areObjRefsEqual, filterAttributeElements, insightTitle, uriRef } from "@gooddata/sdk-model";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";

/*
 * Component to render 'myCustomWidget'. If you create custom widget instance and also pass extra data,
 * then that data will be available in
 */
function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return <div>Hello from custom widget</div>;
}

const image: React.FC = () => {
    return (
        <img
            title="this is my image"
            width="100%"
            height="100%"
            src="https://i1-vnexpress.vnecdn.net/2021/10/27/2-1-jpg-4895-1635323196-163532-4856-2698-1635325843.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=H7iKYlr2miOf2J1VtQlrcA"
        ></img>
    );
};

const Visualization: React.FC = () => {
    return (
        <div style={{height: "100%"}} >
            <InsightView insight="aabml9AhWs9a" />
        </div>
    );
};

function customDecoratorKpi(next: KpiComponentProvider): KpiComponentProvider {
    return (kpi, widget) => {
        function MyCustomDecorator(props: JSX.IntrinsicAttributes & IDashboardKpiProps & { children?: React.ReactNode; }) {
            const Decorated = useMemo(() => next(kpi, widget)!, [kpi, widget]);

            return (
                <div>
                    <p>My Custom Decoration say Hi</p>
                    <Decorated {...props} />
                </div>
            );
        }

        return MyCustomDecorator;
    };
}


const Tooltip: React.FC = () => {
    return (
                <div className="tooltip-icon gd-icon-circle-question__container">
                    ABCDEF
                </div>
    );
};

function CustomAttributeFilter1(props: IDashboardAttributeFilterProps): JSX.Element {
    const { filter, onFilterChanged } = props;
    const attributeFilter = dashboardAttributeFilterToAttributeFilter(filter);
    const { parentFilters, parentFilterOverAttribute } = useParentFilters(filter);

    return (
        <div className="s-attribute-filter">
            <AttributeFilter
                filter={attributeFilter}
                onApply={(newFilter, isInverted) =>
                    onFilterChanged({
                        attributeFilter: {
                            ...filter.attributeFilter,
                            attributeElements: filterAttributeElements(newFilter),
                            negativeSelection: isInverted,
                        },
                    })
                }
                fullscreenOnMobile={true}
                parentFilters={parentFilters} 
                parentFilterOverAttribute={parentFilterOverAttribute}
            />
        </div>
    );
}

export class Plugin extends DashboardPluginV1 {
    public readonly author = entryPoint.author;
    public readonly displayName = entryPoint.displayName;
    public readonly version = entryPoint.version;
    public readonly minEngineVersion = entryPoint.minEngineVersion;
    public readonly maxEngineVersion = entryPoint.maxEngineVersion;

    public onPluginLoaded(_ctx: DashboardContext, _parameters?: string): Promise<void> | void {
    }

    public register(
        ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
        customize.customWidgets().addCustomWidget("myImage", image);
        customize.customWidgets().addCustomWidget("myInsight", Visualization);

        //customize.kpiWidgets().withCustomDecorator(customDecoratorKpi);
        customize.insightWidgets().withCustomDecorator((insightProvider) => (insight, widget) => {
            const InsightTooltipCustomDecorator: CustomDashboardInsightComponent = (props) => {
                const Insight = insightProvider(insight, widget);
                if (insightTitle(insight) === "insightView") {
                    return (
                        <>
                            <Insight {...props} />
                            <Tooltip />
                        </>
                    );
                }
                return <Insight {...props} />;
            };

            return InsightTooltipCustomDecorator;
        });
        customize.filters().attribute().withCustomProvider((filter) => {
            if (
                areObjRefsEqual(
                    filter.attributeFilter.displayForm,
                    uriRef("/gdc/md/"+ ctx.workspace +"/obj/1806"),//stage name-order
                )
            ) {
                return CustomAttributeFilter1;
            }
            
        });
        
        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(
                0,
                newDashboardSection(
                    "Section Added By Plugin",
                    newDashboardItem(newCustomWidget("myWidget1", "myCustomWidget"), {
                        xl: {
                            // all 12 columns of the grid will be 'allocated' for this new item
                            gridWidth: 12,
                            // minimum height since the custom widget now has just some one-liner text
                            gridHeight: 1,
                        },
                    }),
                ),
            );
            customizer.addSection(
                -1,
                newDashboardSection(
                    "last section",
                    newDashboardItem(newCustomWidget("myWidget2", "myCustomWidget"), {
                        xl: {
                            // all 12 columns of the grid will be 'allocated' for this new item
                            gridWidth: 6,
                            // minimum height since the custom widget now has just some one-liner text
                            gridHeight: 3,
                        },
                    }),
                    newDashboardItem(newCustomWidget("myWidget4", "myInsight"), {
                        xl: {
                            // all 12 columns of the grid will be 'allocated' for this new item
                            gridWidth: 6,
                            // minimum height since the custom widget now has just some one-liner text
                            gridHeight: 12,
                        },
                    }),
                ),
            );
            customizer.addItem(
                0, -1,
                newDashboardItem(newCustomWidget("myWidget3", "myImage"), {
                    xl: {
                        // all 12 columns of the grid will be 'allocated' for this this new item
                        gridWidth: 6,
                        // minimum height since the custom widget now has just some one-liner text
                        gridHeight: 3,
                    },
                }),
            );
        });

        handlers.addEventHandler("GDC.DASH/EVT.INITIALIZED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### Dashboard initialized", evt);
        });
    }

    public onPluginUnload(_ctx: DashboardContext): Promise<void> | void {
        /*
         * This will be called when user navigates away from the dashboard enhanced by the plugin. At this point,
         * your code may do additional teardown and cleanup.
         *
         * Note: it is safe to delete this stub if your plugin does not need to do anything extra during unload.
         */
    }
}

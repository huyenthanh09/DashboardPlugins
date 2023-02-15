// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
    IDashboardEventHandling,
    IDashboardWidgetProps,
    newDashboardSection,
    newDashboardItem,
    newCustomWidget,
    changeAttributeFilterSelection,
    changeDateFilterSelection,
    changeFilterContextSelection,
    clearDateFilterSelection,
    CustomDashboardWidgetComponent,
    resetAttributeFilterSelection,
    selectFilterContextAttributeFilterByDisplayForm,
    useDashboardSelector,
    useDispatchDashboardCommand,
    dashboardAttributeFilterToAttributeFilter,
    IDashboardAttributeFilterProps,
} from "@gooddata/sdk-ui-dashboard";

import entryPoint from "../dp_v_811_tiger_entry";

import React from "react";
import { areObjRefsEqual, filterAttributeElements, idRef, newNegativeAttributeFilter, newRelativeDateFilter, uriRef } from "@gooddata/sdk-model";
import { AttributeFilterButton, IAttributeFilterDropdownActionsProps, IAttributeFilterDropdownButtonProps, IAttributeFilterElementsActionsProps, IAttributeFilterElementsSearchBarProps, IAttributeFilterElementsSelectItemProps, IAttributeFilterStatusBarProps } from "@gooddata/sdk-ui-filters";

/*
 * Component to render 'myCustomWidget'. If you create custom widget instance and also pass extra data,
 * then that data will be available in
 */
function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return <div>Hello from custom widget</div>;
}

const changeFilterDashboard: CustomDashboardWidgetComponent = () => {
    /**
     * Creating necessary commands to dispatch filter selection change related commands.
     */
    const changeAttributeFilterSelectionCmd = useDispatchDashboardCommand(changeAttributeFilterSelection);
    const resetAttributeFilter = useDispatchDashboardCommand(resetAttributeFilterSelection);
    const changeDateFilterSelectionCmd = useDispatchDashboardCommand(changeDateFilterSelection);
    const resetDateFilter = useDispatchDashboardCommand(clearDateFilterSelection);
    const changeFilterContextSelectionCmd = useDispatchDashboardCommand(changeFilterContextSelection);

    /**
     * Select the attribute filter's local identifier from the filter's display form.
     */
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

    const changeDashboardDateFilterSelection = () => {
        changeDateFilterSelectionCmd("relative", "GDC.time.month", -11, 0);
    };

    const resetDashboardDateFilter = () => {
        resetDateFilter();
    };

    const changeMultipleFilters = () => {
        // set the region filter and date filter using a single command
        changeFilterContextSelectionCmd([
            newNegativeAttributeFilter("region", {
                uris: ["West"],
            }),
            newRelativeDateFilter(idRef("date", "dataSet"), "GDC.time.year", -10, 0),
        ]);
    };

    return (
        <div>
            <button onClick={changeRegionFilterSelection}>Change Region selection</button>
            <button onClick={resetRegionFilterSelection}>Reset Region filter</button>
            <button onClick={changeDashboardDateFilterSelection}>Change date filter selection</button>
            <button onClick={resetDashboardDateFilter}>Clear date filter selection</button>
            <button onClick={changeMultipleFilters}>Change multiple filters at once</button>
        </div>
    );
};

const CustomDropdownActions = (props: IAttributeFilterDropdownActionsProps) => {
    const { onApplyButtonClick, onCancelButtonClick, isApplyDisabled=false } = props;
    return (
        <div
            style={{
                borderTop: "1px solid black",
                display: "flex",
                padding: 10,
                margin: 0,
                justifyContent: "right",
                background: "yellow",
            }}
        >
            <button style={{ border: "1px solid red", margin:"0 10px 0 0"}} onClick={onCancelButtonClick}  disabled={isApplyDisabled}>
                Custom Close button
            </button>
            <button style={{ border: "1px solid red" }} onClick={onApplyButtonClick}  disabled={isApplyDisabled}>
                Custom Apply button
            </button>
        </div>
    );
};

const CustomDropdownButton = (props: IAttributeFilterDropdownButtonProps) => {
    const { title, onClick, selectedItemsCount, subtitle, icon, isDraggable } = props;

    return (
        <button draggable={isDraggable} style={{ border: "1px solid black", width:'300px' }} onClick={onClick}>
            {title} - ({subtitle}) - ({selectedItemsCount} {icon})
        </button>
    );
};

const CustomElementsSearchBar = (props: IAttributeFilterElementsSearchBarProps) => {
    const { onSearch, searchString } = props;

    return (
        <div
            style={{
                borderBottom: "1px solid black",
                padding: 10,
                margin: "0 0 5px",
                background: "cyan",
            }}
        >
            Search attribute values:{" "}
            <input
                style={{ width: "100%" }}
                onChange={(e) => onSearch(e.target.value)}
                value={searchString}
            />
        </div>
    );
};

const CustomElementsSelectItem = (props: IAttributeFilterElementsSelectItemProps) => {
    const { isSelected, item, onDeselect, onSelect } = props;

    return (
        <div
            style={{
                borderBottom: "3px solid #fff",
                padding: "0 10px",
                background: "cyan",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "28px",
                margin: "0px 10px",
                cursor: "pointer",
            }}
            onClick={() => {
                if (isSelected) {
                    onDeselect();
                } else {
                    onSelect();
                }
            }}
        >
            <div>{item.title}</div>
            <div>{isSelected ? "✔" : ""}</div>
        </div>
    );
};

const CustomStatusBar = (props: IAttributeFilterStatusBarProps) => {
    const { selectedItems, isInverted } = props;
    return (
        <div
            style={{
                border: "2px solid black",
                display: "flex",
                margin: 0,
                justifyContent: "left",
                background: "cyan",
                alignItems: "center",
                padding: 10,
            }}
        >
            <div>
                {isInverted && selectedItems.length === 0 ? "All" : ""}
                {!isInverted && selectedItems.length === 0 ? "None" : ""}
                {isInverted && selectedItems.length > 0 ? "All except:" : ""}{" "}
                <b>{selectedItems.map((item: { title: any; }) => item.title).join(", ")}</b>
            </div>
        </div>
    );
};

const CustomElementsSelectActionsComponent: React.VFC<IAttributeFilterElementsActionsProps> = (props) => {
    const { onChange, onToggle, totalItemsCount, isVisible } = props;

    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                background: "pink",
                width: "100%",
                paddingLeft: 10,
            }}
        >
            <button onClick={() => onChange(true)}>all</button>
            <button onClick={() => onChange(false)}>none</button>
            <button onClick={() => onToggle()}>toggle</button>
            <span style={{ paddingLeft: 10 }}>({totalItemsCount})</span>
        </div>
    );
};

function CustomAttributeFilter2(props: IDashboardAttributeFilterProps): JSX.Element {
    const { filter, onFilterChanged } = props;
    const attributeFilter = dashboardAttributeFilterToAttributeFilter(filter);

    return (
        <div className="s-attribute-filter">
            <AttributeFilterButton
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
                DropdownActionsComponent={CustomDropdownActions}
                 DropdownButtonComponent={CustomDropdownButton}
                 ElementsSearchBarComponent={CustomElementsSearchBar}//{EmptyElementsSearchBar}//{CustomElementsSearchBar}
                 ElementsSelectItemComponent={CustomElementsSelectItem}
                 ElementsSelectActionsComponent={CustomElementsSelectActionsComponent}
                StatusBarComponent={CustomStatusBar}
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
        /*
         * This will be called when the plugin is loaded in context of some dashboard and before
         * the register() method.
         *
         * If the link between the dashboard and this plugin is parameterized, then all the parameters will
         * be included in the parameters string.
         *
         * The parameters are useful to modify plugin behavior in context of particular dashboard.
         *
         * Note: it is safe to delete this stub if your plugin does not need any specific initialization.
         */
    }

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
        customize.customWidgets().addCustomWidget("changeFilters", changeFilterDashboard);

        customize.filters().attribute().withCustomProvider((filter) => {
            // Use case, when we want to render different filter for specific display form
            // Note: replace this only with attributes with two or three elements
            // as it renders them right in the filter bar
            if (
                areObjRefsEqual(
                    filter.attributeFilter.displayForm,
                    idRef("region"),//region
                )
            ) {
                return CustomAttributeFilter2;
            }
            
        });

        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(
                0,
                newDashboardSection(
                    "Section Added By Plugin",
                    newDashboardItem(newCustomWidget("myWidget1", "myCustomWidget"), {
                        xl: {
                            // all 12 columns of the grid will be 'allocated' for this this new item
                            gridWidth: 12,
                            // minimum height since the custom widget now has just some one-liner text
                            gridHeight: 1,
                        },
                    }),
                    newDashboardItem(
                        newCustomWidget("myWidget2", "changeFilters"),
                        {
                            xl: {gridWidth: 12,gridHeight: 3,},
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
        /*
         * This will be called when user navigates away from the dashboard enhanced by the plugin. At this point,
         * your code may do additional teardown and cleanup.
         *
         * Note: it is safe to delete this stub if your plugin does not need to do anything extra during unload.
         */
    }
}

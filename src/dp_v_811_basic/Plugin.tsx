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
    dashboardAttributeFilterToAttributeFilter,
    IDashboardAttributeFilterProps,
} from "@gooddata/sdk-ui-dashboard";
import { AttributeFilterButtonV2, useAttributeFilterController } from "@gooddata/sdk-ui-filters";

import entryPoint from "../dp_v_811_basic_entry";

import React from "react";
import { filterAttributeElements, areObjRefsEqual, uriRef } from "@gooddata/sdk-model";

/*
 * Component to render 'myCustomWidget'. If you create custom widget instance and also pass extra data,
 * then that data will be available in
 */
function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return <div>Hello from custom widget</div>;
}

function CustomAttributeFilter1(props: IDashboardAttributeFilterProps): JSX.Element {
    const { filter, onFilterChanged } = props;
    const attributeFilter = dashboardAttributeFilterToAttributeFilter(filter);
    const {
        isLoadingInitialElementsPage,
        elements,
        workingSelectionElements,
        isWorkingSelectionInverted,
        onSelect,
        onApply,
    } = useAttributeFilterController({
        filter: attributeFilter,
        onApply: (newFilter, isInverted) =>
            onFilterChanged({
                attributeFilter: {
                    ...filter.attributeFilter,
                    attributeElements: filterAttributeElements(newFilter),
                    negativeSelection: isInverted,
                },
            }),
    });

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 55,
                margin: "0 10px",
                fontSize: 12,
            }}
        >
            {isLoadingInitialElementsPage && "Loading..."}
            {elements.map((element) => {
                const isSelected =
                    (!isWorkingSelectionInverted && workingSelectionElements.includes(element)) ||
                    (isWorkingSelectionInverted && !workingSelectionElements.includes(element));
                return (
                    <div
                        style={{
                            backgroundColor: isSelected ? "yellow" : "white",
                            fontWeight: isSelected ? "bold" : "normal",
                            margin: 10,
                            border: "1px solid #000",
                            borderRadius: 5,
                            padding: 10,
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            const newSelection = workingSelectionElements.includes(element)
                                ? workingSelectionElements.filter((e) => e !== element)
                                : workingSelectionElements.concat([element]);
                            onSelect(newSelection, isWorkingSelectionInverted);
                            onApply();
                        }}
                        key={element.uri}
                    >
                        {element.title}
                    </div>
                );
            })}
        </div>
    );
}

const CustomDropdownActions = (props: IAttributeFilterDropdownActionsProps) => {
    const { onApplyButtonClick, onCloseButtonClick, isApplyDisabled=false } = props;
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
            <button style={{ border: "1px solid red", margin:"0 10px 0 0"}} onClick={onCloseButtonClick}  disabled={isApplyDisabled}>
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

function CustomAttributeFilter2(props: IDashboardAttributeFilterProps): JSX.Element {
    const { filter, onFilterChanged } = props;
    const attributeFilter = dashboardAttributeFilterToAttributeFilter(filter);

    return (
        <div className="s-attribute-filter">
            <AttributeFilterButtonV2
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
                StatusBarComponent={CustomStatusBar}
            />
        </div>
    );
}

function CustomAttributeFilter3(props: IDashboardAttributeFilterProps): JSX.Element {
    const { filter, onFilterChanged } = props;
    const attributeFilter = dashboardAttributeFilterToAttributeFilter(filter);

    return (
        <div className="s-attribute-filter">
            <AttributeFilterButtonV2
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
        ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        customize.filters().attribute().withCustomProvider((filter) => {
            // Use case, when we want to render different filter for specific display form
            // Note: replace this only with attributes with two or three elements
            // as it renders them right in the filter bar
            if (
                areObjRefsEqual(
                    filter.attributeFilter.displayForm,
                    uriRef("/gdc/md/"+ ctx.workspace +"/obj/1805"),//stage name
                )
            ) {
                return CustomAttributeFilter1;
            }
            else if (
                areObjRefsEqual(
                    filter.attributeFilter.displayForm,
                    uriRef("/gdc/md/"+ ctx.workspace +"/obj/1028"),//sale-rep
                )
            ){
                return CustomAttributeFilter2;
            }
            return CustomAttributeFilter3;
            
        });

        customize.filters().attribute().withCustomDecorator((next) => {
            return (attributeFilter) => {
                if (areObjRefsEqual(
                   attributeFilter.attributeFilter.displayForm,
                   uriRef("/gdc/md/"+ ctx.workspace +"/obj/1805"),//stage name
               )|| areObjRefsEqual(
                   attributeFilter.attributeFilter.displayForm,
                   uriRef("/gdc/md/"+ ctx.workspace +"/obj/1028"),//sale-rep
               )|| areObjRefsEqual(
                   attributeFilter.attributeFilter.displayForm,
                   uriRef("/gdc/md/"+ ctx.workspace +"/obj/1024"),//region
               )) {
                    return MyCustomDecorator;
                }
       
                function MyCustomDecorator(props: JSX.IntrinsicAttributes & IDashboardAttributeFilterProps & { children?: React.ReactNode; }) {
                     const Decorated = next(attributeFilter);
       
                     return (
                         <div style={{width:'100%'}}>
                             <b>My Custom Decoration</b>
                             <Decorated {...props}/>
                         </div>
                     )
                }
                    return undefined;
            }
        })

        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
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


import * as React from "react";
import {keys} from "ts-transformer-keys";

import {DockPanel} from "@phosphor/widgets/lib/dockpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

import ReactContainerWidget from "./ReactContainerWidget";

import "@phosphor/widgets/style/dockpanel.css";

interface ReactDockPanelProps {
  sizes?: number[];
}

export default class ReactDockPanel extends ReactContainerWidget<DockPanel, DockPanel.IOptions, ReactDockPanelProps> {

  constructor(props:any) {
    super(props);

    this.containerWidget = new DockPanel(props.options || {});
    //this.optionKeys = ["tabPlacement", "tabsMovable"];
  }
}

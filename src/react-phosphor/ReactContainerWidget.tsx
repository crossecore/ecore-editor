
import * as React from "react";

import {BoxPanel} from "@phosphor/widgets/lib/boxpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

interface ReactContainerWidgetProps<T, O> {
  className?: string;
  style?: React.CSSProperties;

  options?: Partial<O>;
}

interface ContainerType {
  addWidget(widget: Widget):void;
}

export default class ReactContainerWidget<T extends Widget & ContainerType, O, P> extends React.PureComponent<ReactContainerWidgetProps<T, O> & P, {}> {

  protected containerWidget: T | null;
  private elem: HTMLElement | undefined | null;

  private storedContext: IWidgetParent | undefined|null;

  optionKeys: (keyof O)[];

  constructor(props:any) {
    super(props);

    // Subclass must set this
    this.containerWidget = null;

    this.optionKeys = [];
  }

  componentDidMount() {
    this.attach();
  }

  componentDidUpdate(prevProps: ReactContainerWidgetProps<T, O>) {
    // TODO: get ts-transformer-keys working: keys<SplitPanel.IOptions>();
    
    /*
    for (let k of this.optionKeys) {
      if ((prevProps.options || {})[k] !== (this.props.options || {})[k]) {
        this.containerWidget[k] = this.props.options[k];
      }
    }
    */
    
    this.attach();
  }

  attach() {
    let parent = this.storedContext;

    // If we have a parent, attach to it and render using portals
    // Otherwise, attach to our own React DOM node
    if (parent) {
      parent.receiveChild(this.containerWidget as Widget);
    } else {
      setNodeAbsolute(this.containerWidget!.node);

      if (!this.containerWidget!.isAttached) Widget.attach(this.containerWidget!, this.elem!);
    }
  }

  receiveChild(child: Widget) {
    this.containerWidget!.addWidget(child);
  }

  render() {
    return (
      <div className={this.props.className || ""}
           style={{
             position: "relative",
             ...(this.props.style || {})
           }}>

          <div ref={(c) => this.elem = c}
               style={absoluteFill} />

          <WidgetParentContext.Consumer>
              {(value) => { this.storedContext = value; return null; }}
          </WidgetParentContext.Consumer>

          <WidgetParentContext.Provider value={this as any}>
              {this.props.children}
          </WidgetParentContext.Provider>
      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import icon1 from '../assets/icons/query_builder-24px.svg'
import icon2 from '../assets/icons/functions-24px.svg'
import icon3 from '../assets/icons/keyboard-24px.svg'
import icon4 from '../assets/icons/text_snippet-24px.svg'
import ChartMain, {C12} from "./ChartMain";

class Content extends Component {
    render() {
        return (
            <div className="ui-content">
                <Tabs>
                    <TabList>
                        <Tab>
                            <DashTab
                                name="avg response delay"
                                icon={icon1}
                                value={'20'}/>
                        </Tab>
                        <Tab>
                            <DashTab
                                name="last queue size"
                                icon={icon2}
                                value={'32'}>
                                <C12/>
                            </DashTab>
                        </Tab>
                        <Tab>
                            <DashTab
                                name="avg payload size"
                                icon={icon3}
                                value={'20'}/>
                        </Tab>
                        <Tab>
                            <DashTab
                                name="dead letter queue"
                                icon={icon4}
                                value={'0'}/>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="ui-content__tab-pane">Any content 1</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ui-content__tab-pane">
                            <div className="ui-filter">
                                <label className="dark">Pending increased</label>
                                <label className="dark">Pending resolved</label>
                                <label>Alerts</label>
                                <label>Insights</label>
                                <label>Config. change</label>
                                <div className="ui-filter__right">
                                    <label>~15 hours ago > ~in 9 hours</label>
                                    <button>O</button>
                                </div>
                            </div>
                            <ChartMain/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ui-content__tab-pane">Any content 3</div>
                    </TabPanel>
                    <TabPanel>
                        <div className="ui-content__tab-pane">Any content 4</div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

Content.propTypes = {};

function DashTab(props) {
    return (
        <div className="ui-content__tab">
            <h2 className="ui-content__tab--name">{props.name}<img src={props.icon}/></h2>
            <h3 className="ui-content__tab--value">{props.value}</h3>
            <div className="ui-content__tab--spark">{props.children}</div>
        </div>
    )
}

export default Content;

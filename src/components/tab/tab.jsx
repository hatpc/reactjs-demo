import {useState} from 'react';
import './tab.css';

const Tab = () => {

    const [activeTab, setActiveTab] = useState('History');

    return (
        <>
            <div className='formart-content'>
                <ul className="nav nav-pills mb-3 text-center" id="pills-tab" role="tablist">
                    <button onClick={
                            () => setActiveTab('History')
                        }
                        className={
                            `custom-btn ${
                                activeTab === 'History' && 'active'
                            }`
                        }
                        id="pills-History-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-History"
                        type="button"
                        role="tab"
                        aria-controls="pills-History"
                        aria-selected="true">
                        History
                    </button>
                    <button onClick={
                            () => setActiveTab('Approach')
                        }
                        className={
                            `custom-btn ${
                                activeTab === 'Approach' && 'active'
                            }`
                        }
                        id="pills-Approach-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Approach"
                        type="button"
                        role="tab"
                        aria-controls="pills-Approach"
                        aria-selected="false">
                        Approach
                    </button>
                    <button className={
                            `custom-btn ${
                                activeTab === 'Culture' && 'active'
                            }`
                        }
                        onClick={
                            () => setActiveTab('Culture')
                        }
                        id="pills-Culture-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Culture"
                        type="button"
                        role="tab"
                        aria-controls="pills-Culture"
                        aria-selected="false">
                        Culture
                    </button>
                    <button onClick={
                            () => setActiveTab('Method')
                        }
                        className={
                            `custom-btn ${
                                activeTab === 'Method' && 'active'
                            }`
                        }
                        id="pills-Method-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Method"
                        type="button"
                        role="tab"
                        aria-controls="pills-Culture"
                        aria-selected="false">
                        Method
                    </button>
                </ul>
                <div className="tab-btn-" id="pills-tabbtn-">
                    <div className={
                            `tab-pane fade ${
                                activeTab === 'History' && 'show active'
                            }`
                        }
                        id="pills-History"
                        role="tabpanel"
                        aria-labelledby="pills-History-tab">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                    </div>
                    <div className={
                            `tab-pane fade ${
                                activeTab === 'Approach' && 'show active'
                            }`
                        }
                        id="pills-Approach"
                        role="tabpanel"
                        aria-labelledby="pills-Approach-tab">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </div>
                    <div className={
                            `tab-pane fade ${
                                activeTab === 'Culture' && 'show active'
                            }`
                        }
                        id="pills-Culture"
                        role="tabpanel"
                        aria-labelledby="pills-Culture-tab">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.
                    </div>
                    <div className={
                            `tab-pane fade ${
                                activeTab === 'Method' && 'show active'
                            }`
                        }
                        id="pills-Method"
                        role="tabpanel"
                        aria-labelledby="pills-Method-tab">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </div>
                </div>
            </div>

        </>
    )

}

export default Tab;

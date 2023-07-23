import {useState} from 'react';

import './accorddions.css';
const Accordions = () => {
    const defaultOneAtATime = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    const [isActive, setIsActive] = useState('simplePanels');

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4>Button Accordions</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h5 className="uppercase">One at a time</h5>
                    <ul className="accordion accordion-1 ">
                        <OneAtATimeTab title="Simple Panels"
                            content={defaultOneAtATime} isActive={isActive} value="simplePanels" setIsActive={setIsActive} />
                        <OneAtATimeTab title="Toggle Information"
                            content={defaultOneAtATime} isActive={isActive} value="toggleInformation" setIsActive={setIsActive} />
                        <OneAtATimeTab title="Nice Touch"
                            content={defaultOneAtATime} isActive={isActive} value="niceTouch" setIsActive={setIsActive} />
                    </ul>

                </div>
                <div className="col-sm-6">
                    <h5 className="uppercase ">Multiple Open</h5>
                    <ul className="accordion accordion-1">
                        <MultiOpenTab title="Simple Panels"
                            content={defaultContent}/>
                        <MultiOpenTab title="Toggle Information"
                            content={defaultContent}/>
                        <MultiOpenTab title="Nice Touch"
                            content={defaultContent}/>
                    </ul>
                </div>
            </div>

        </div>


    );

}

export default Accordions;

const MultiOpenTab = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return(
        // Func onClick: prev co nghia la gia tri truoc do cua bien isActive 
        <li onClick={
            () => setIsActive((prev) => !prev)
        }>
            <div className={
                `title ${
                    isActive ? 'active-title' : ''
                }`
            }>
                <span>{title}</span>
            </div>
            <div className={
                `content ${
                    isActive ? '' : 'd-none'
                }`
            }>
                <p> {content} </p>
            </div>
        </li>
    )

}
const OneAtATimeTab = ({title, content, isActive, value, setIsActive}) => {
    return (
        <li onClick={() => setIsActive(value)}>
            <div className={
                `title ${
                    isActive === value ? 'active-title' : ''
                }`
            }>
                <span>{title}</span>
            </div>
            <div className={
                `content ${
                    isActive === value ? '' : 'd-none'
                }`
            }>
                <p>{content}</p>
            </div>
        </li>
    )
}

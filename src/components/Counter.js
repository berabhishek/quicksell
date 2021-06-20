import React, {useState} from "react";
import UpdateButton from "./UpdateButton";
import "./counterStyles.css";
function Counter(props) {
    let initCounter = 0;
    if(typeof props.init !== "undefined") {
        initCounter = props.init;
    }
    let MAX_COUNTER = 100;
    if(typeof props.max !== "undefined") {
        MAX_COUNTER =  props.max;
    }
    let [counter, setCounter] = useState(initCounter);
    let setCounterWrapper = function(value) {
        if (value < initCounter) {
            setCounter(initCounter);
        } else if (value > MAX_COUNTER) {
            setCounter(MAX_COUNTER);
        } else {
            setCounter(value);
        }
    };


    let incrementCounter = function() {
        setCounterWrapper(counter + 1);
    }

    let decrementCounter = function() {
        setCounterWrapper(counter - 1);
    }

    let contentChanged = function (event) {
        debugger;
    }

    return (
        <div>
            <div className="btnDiv">
                <UpdateButton className="btnDecrement" onClick={decrementCounter} text="-"/>
            </div>
            <div className="btnDiv ">
                <div className="btnClass divCounter" contentEditable="true">
                    {counter}
                </div>
            </div>
            <div className="btnDiv">
                <UpdateButton className="btnIncrement" onClick={incrementCounter} text="+"/>
            </div>
        </div>
    )

}

export default Counter;
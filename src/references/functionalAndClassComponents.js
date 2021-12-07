import React, {useEffect, useState} from "react";

const FunctionalAndClassComponents = () => {
    const [count, setCount] = useState(0);

    // This is the equivalent of didMount, didUnmount, didChange for functional components.
    // Changing a component, means unmounting it, and mounting the new representation of said component
    useEffect(() => {
        console.log("The Component Has Been Mounted");

        // This is triggered when a component is removed due to an update of state, or a request
        // to remove the component completely. In this example, we only update state.
        return () => {
            console.log("The Component has been unmounted due to change");
        }
        // The array below, represents what elements, when changed, rendered, or removed, may call upon this useEffect method
    }, [count]);

    // This is a function that changes the state, therefore causes a new render of our component.
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someVariable: 0,
        }
        this.someMethod = this.someMethod.bind(this);
    }

    componentDidMount() {
        // Runs whenever component is first mounted
    }

    componentDidUpdate(prevProps, prevState) {
        // Runs whenever something changes in the component
    }

    componentWillUnmount() {
        // Runs when component is removed from rendering
    }

    someMethod() {
        this.setState({
            someVariable: 1,
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default FunctionalAndClassComponents;
import  React from 'react';


class Click extends React.Component {
    state ={
        text:""
    };

    // clickButton1 = () => this.setState (({ text }) => ({ text: "one"}));
    // clickButton2 = () => this.setState (({ text }) => ({ text: "two"}));
    // clickButton3 = () => this.setState (({ text }) => ({ text: "one"}));

    // render () {
    //     const { text } = this.state

    //     return(
    //         <div className="button">
    //             <div className="click">
    //                 <button className="button" onClick= {this.clickButton1}>1</button>
    //                 <button className="button" onClick= {this.clickButton2}>2</button>
    //                 <button className="button" onClick= {this.clickButton3}>3</button>

    //             </div>
    //             <p>{text}</p>
    //         </div>
    //     );
    // }
    clickButton =(num) => {this.setState ({text:num})}
    render () {
        const { text }= this.state
        return(
            <div className="button">
                <div className="click">
                    <button className="button" onClick = {() =>this.clickButton("one")}>one</button>
                    <button className="button" onClick = {() =>this.clickButton("two")}>two</button>
                    <button className="button" onClick = {() => this.clickButton("three")}>three</button>
                    <button className="button" onClick ={() => this.clickButton("")}>reset</button>
                </div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Click;
import React from  'react';

class Toogle extends React.Component{
    state = {
        showImage:false
    };

    showPhoto = () => this.setState (({showImage }) => ({ showImage: !showImage})); //boolean(true or false)

    render () {
        const {showImage} = this.state;
        return (
            //(? = ternery operator)
            <div className="photo">
              <button className ="button" onClick={this.showPhoto}>  
                  {showImage ? "Hide Photo": "Show Photo"} 
              </button> 
              {showImage && (
                  <img src="https://placeimg.com/500/200/laptop" alt=""/>  //(&& = true condition)
              )}
            </div>
        );
    }
}

export default Toogle;
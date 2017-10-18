import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {add,sub,div,mul,setFirstNumber,setSecondNumber,calculate} from "./actions/index";
import {connect} from 'react-redux';


class App extends Component {
    
  render() {
    console.log(this.props);
    const _data=this.props;
    console.log(_data);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
        </header>
        <div className="row">
        <div className="col-sm-12 form-design">
        <div className="form-horizontal">
        <div className="form-group row">
         <div className="col-sm-4">
        <label>Enter First Number:</label></div>
         <div className="col-sm-4">
        <input className="form-control" type="text" id="first" onChange={()=>
        {this.props.dispatch(this.props.setFirstNumber(document.getElementById('first').value))}}/><br/>
        </div></div>
        <div className="form-group row">
        <div className="col-sm-4">
        <label>Enter Second Number:</label></div>
        <div className="col-sm-4">
        <input className="form-control" id="second" onChange={()=>
        {this.props.dispatch(this.props.setSecondNumber(document.getElementById('second').value))}}/><br/>
        </div></div>
        
        <div className="form-group row">
        <div className="col-sm-4">
        <label>Result</label></div>
        <div className=" col-sm-4">
        <input className="form-control" type="text" value={this.props.result}/>
        </div></div>
        <div className="form-group row btn-orient">
        <button className="btn btn-primary btn-margin" onClick={() => {
                                this.props.calculate(this.props.firstNumber,this.props.secondNumber,'add')
                            }}>ADD</button>
        <button className="btn btn-primary btn-margin"  onClick={() => {
                                this.props.calculate(this.props.firstNumber,this.props.secondNumber,'sub')
                            }}>SUB</button>
        <button className="btn btn-primary btn-margin" onClick={() => {
                                this.props.calculate(this.props.firstNumber,this.props.secondNumber,'mul')
                            }}>MUL</button>
        <button className="btn btn-primary btn-margin" onClick={() => {
                                this.props.calculate(this.props.firstNumber,this.props.secondNumber,'div')
                            }}>DIV</button>
                          </div>
                            </div>
                            </div>
                            </div>

        </div>
    );
  }
}

const mapStateToProps=(state)=> {
    return {
        firstNumber:state.reducer.value1,
        secondNumber:state.reducer.value2,
        result:state.reducer.result,
        operator:state.reducer.operator
    };
};

const mapDispatchToProps=(dispatch)=> {
    let actions={setFirstNumber,setSecondNumber}
    return {
        calculate : (number1,number2,operator) => dispatch(calculate(number1,number2,operator)),
        ...actions,dispatch
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);


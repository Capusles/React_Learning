import React,{Component,Fragment} from "react";

class Xiaojiejie extends Component{
    constructor(props) {
        super(props)
        this.state={
            inputValue:'',
            list:['123','精油推背','精油推背']
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> 
                    <button onClick={this.addList.bind(this)}>增加项目</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return (
                               <li 
                                key={index+item}
                                onClick={this.deleteItem.bind(this,index)}
                                >                                   
                                {item}
                                </li>
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        //console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie
import React,{Component} from 'react'

export default class Cars extends Component{
    //carName="Virtus"

    // getCarName(car){
    //     this.carName = car
    //     console.log(this.carName)
    // }

    constructor(){
        super()
        this.state= {
            carName : "Virtus"
        }

    }
    getCarName(car){
        this.setState({carName:car})
    }
    render(){
        return (
            <div className='m-5 border p-5'>
                <h1 className='text-center text-primary'>
                    Inside Car Component
                </h1>
                {/* <input onChange={e=>this.getCarName(e.target.value)} type="text" className='form-control w-75 m-5' placeholder='Car name'/> */}

                <input 
                onChange={e=>this.getCarName(e.target.value)} 
                type="text" 
                className='form-control w-75 m-5' 
                placeholder='Car name'/>
                
                <div className='bg-warning p-5 text-danger fs-2 fw-bolder'> Car is :
                
                    <span className='text-light'>{this.state.carName}</span>
                </div>
            </div>
        )
    }
}
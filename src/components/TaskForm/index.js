import { Component } from "react";
import "./index.css"


class TaskForm extends Component {
    state={name:"",description:""}

    handleName=(event)=>{
        this.setState({name:event.target.value})
    }

    handleDescription=(event)=>{
        this.setState({description:event.target.value})
    }

    onSubmitSuccess=()=>{
      const {history}=this.props
      history.push("/")
    }

    submitForm = async event => {
        event.preventDefault()
        const {name, description} = this.state
        const taskDetails = {name, description}
        const url = 'https://tasks-app-backend-1t8s.onrender.com/tasks'
        const options = {
          method: 'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(taskDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
          this.onSubmitSuccess()
        } else {
          console.log("not created task")
        }
      }


    render() {
        const {name,description}=this.state

        return (
            <div className="task-form">
                <div className="task-container">
                <h1>Create Task</h1>
                <form className="form" onSubmit={this.submitForm}>
                    <div className="form-element">
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" className="input" id="name" onChange={this.handleName} value={name} placeholder="Add Name"/>
                    </div>
                    <div>
                        <label htmlFor="description" className="label">description</label>
                        <textarea rows={15} id="description" className="description" onChange={this.handleDescription} value={description} placeholder="Add Description"></textarea>
                    </div>
                    <button type="submit" className="button">Create</button>
                </form>
                </div>
            </div>
        )
    }
}
export default TaskForm

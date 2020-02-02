import React, {Component} from 'react'

class InputMandalArt extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //         posts: []
    //     }
    // }

    state = {
        title: '',
        content: ''
    }

    componentWillMount() {
        fetch('http://pioneer-agghe.run.goorm.io/mandalart/0/0?mandalId=0')
            .then(res => res.json())
            // .then(data => console.log("data", data));
            .then(data => this.setState({
                //  data.item
            }))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            title: '',
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="position_mainitem" value={this.props.mainitem} />
                    <input type="hidden" name="position_subitem" value={this.props.subitem} />
                    <div className="field">
                        <label className="label">제목</label>
                        <div className="control">
                            <input className="input" name="title"value={this.state.title} onChange={this.handleChange} type="text" placeholder="규칙적인 생활하기" />
                        </div>
                        <label className="label">내용</label>
                        <div className="control">
                            <input className="input" type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="규칙적인 생활하기" />
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">확인</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">취소</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputMandalArt
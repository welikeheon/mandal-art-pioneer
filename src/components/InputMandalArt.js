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
        content: '',
        mandalId: ''
    }

    componentWillMount() {
        console.log(window.location.href)
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
        fetch()
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
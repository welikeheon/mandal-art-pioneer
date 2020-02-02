import React from 'react'
import '../sass/MandalArt.sass'
class LeftSide extends React.Component {
    
    state = {
        mainitem: '',
        subitem: '',
        item11: '',
        item12: '',
        item13: '',
        item21: '',
        item22: '',
        item23: '',
        item31: '',
        item32: '',
        item33: '',
        item14: '',
        item15: '',
        item16: '',
        item24: '',
        item25: '',
        item26: '',
        item34: '',
        item35: '',
        item36: '',
        item17: '',
        item18: '',
        item19: '',
        item27: '',
        item28: '',
        item29: '',
        item37: '',
        item38: '',
        item39: '',
        item41: '',
        item42: '',
        item43: '',
        item51: '',
        item52: '',
        item53: '',
        item61: '',
        item62: '',
        item63: '',
        item44: '',
        item45: '',
        item46: '',
        item54: '',
        item55: '',
        item56: '',
        item64: '',
        item65: '',
        item66: '',
        item47: '',
        item48: '',
        item49: '',
        item57: '',
        item58: '',
        item59: '',
        item67: '',
        item68: '',
        item69: '',
        item71: '',
        item72: '',
        item73: '',
        item81: '',
        item82: '',
        item83: '',
        item91: '',
        item92: '',
        item93: '',
        item74: '',
        item75: '',
        item76: '',
        item84: '',
        item85: '',
        item86: '',
        item94: '',
        item95: '',
        item96: '',
        item77: '',
        item78: '',
        item79: '',
        item87: '',
        item88: '',
        item89: '',
        item97: '',
        item98: '',
        item99: ''
    }

    componentWillMount() {
        fetch('https://pioneer-agghe.run.goorm.io/mandalart/0/1')
            .then(res => res.json())
            .then(data => {
                data.items.map(x => {
                    x.subItems.map(y => {
                        var itemCombine = "item" + x.itemsSquare + y.subSquare
                        var stateObj = {}
                        stateObj[itemCombine] = y.subTitle
                        this.setState(stateObj)
                    })
                })
            })
            // .then(data => this.setState({
            //     item11: data.
            // }) )
    }

    handleClick = (e) => {
        // console.log(e.target.dataset.mainitem)
        this.setState({
            mainitem: e.target.dataset.mainitem,
            subitem: e.target.dataset.subitem
        })
        this.props.selectedPositions(e.target.dataset)
    }

    render() {

        return (
            <div className="column is-two-thirds">
                <ul id="MandalArt">
                    <li class="item11" onClick={this.handleClick} data-mainitem="1" data-subitem="1"><span>{this.state.item11}</span></li>
                    <li class="item12" onClick={this.handleClick} data-mainitem="1" data-subitem="2"><span>{this.state.item12}</span></li>
                    <li class="item13" onClick={this.handleClick} data-mainitem="1" data-subitem="3"><span>{this.state.item13}</span></li>
                    <li class="item21" onClick={this.handleClick} data-mainitem="2" data-subitem="1"><span>{this.state.item21}</span></li>
                    <li class="item22" onClick={this.handleClick} data-mainitem="2" data-subitem="2"><span>{this.state.item22}</span></li>
                    <li class="item23" onClick={this.handleClick} data-mainitem="2" data-subitem="3"><span>{this.state.item23}</span></li>
                    <li class="item31" onClick={this.handleClick} data-mainitem="3" data-subitem="1"><span>{this.state.item31}</span></li>
                    <li class="item32" onClick={this.handleClick} data-mainitem="3" data-subitem="2"><span>{this.state.item32}</span></li>
                    <li class="item33" onClick={this.handleClick} data-mainitem="3" data-subitem="3"><span>{this.state.item33}</span></li>
                    <li class="item14" onClick={this.handleClick} data-mainitem="1" data-subitem="4"><span>{this.state.item14}</span></li>
                    <li class="item15" onClick={this.handleClick} data-mainitem="1" data-subitem="5"><span>{this.state.item15}</span></li>
                    <li class="item16" onClick={this.handleClick} data-mainitem="1" data-subitem="6"><span>{this.state.item16}</span></li>
                    <li class="item24" onClick={this.handleClick} data-mainitem="2" data-subitem="4"><span>{this.state.item24}</span></li>
                    <li class="item25" onClick={this.handleClick} data-mainitem="2" data-subitem="5"><span>{this.state.item25}</span></li>
                    <li class="item26" onClick={this.handleClick} data-mainitem="2" data-subitem="6"><span>{this.state.item26}</span></li>
                    <li class="item34" onClick={this.handleClick} data-mainitem="3" data-subitem="4"><span>{this.state.item34}</span></li>
                    <li class="item35" onClick={this.handleClick} data-mainitem="3" data-subitem="5"><span>{this.state.item35}</span></li>
                    <li class="item36" onClick={this.handleClick} data-mainitem="3" data-subitem="6"><span>{this.state.item36}</span></li>
                    <li class="item17" onClick={this.handleClick} data-mainitem="1" data-subitem="7"><span>{this.state.item17}</span></li>
                    <li class="item18" onClick={this.handleClick} data-mainitem="1" data-subitem="8"><span>{this.state.item18}</span></li>
                    <li class="item19" onClick={this.handleClick} data-mainitem="1" data-subitem="9"><span>{this.state.item19}</span></li>
                    <li class="item27" onClick={this.handleClick} data-mainitem="2" data-subitem="7"><span>{this.state.item27}</span></li>
                    <li class="item28" onClick={this.handleClick} data-mainitem="2" data-subitem="8"><span>{this.state.item28}</span></li>
                    <li class="item29" onClick={this.handleClick} data-mainitem="2" data-subitem="9"><span>{this.state.item29}</span></li>
                    <li class="item37" onClick={this.handleClick} data-mainitem="3" data-subitem="7"><span>{this.state.item37}</span></li>
                    <li class="item38" onClick={this.handleClick} data-mainitem="3" data-subitem="8"><span>{this.state.item38}</span></li>
                    <li class="item39" onClick={this.handleClick} data-mainitem="3" data-subitem="9"><span>{this.state.item39}</span></li>
                    <li class="item41" onClick={this.handleClick} data-mainitem="4" data-subitem="1"><span>{this.state.item41}</span></li>
                    <li class="item42" onClick={this.handleClick} data-mainitem="4" data-subitem="2"><span>{this.state.item42}</span></li>
                    <li class="item43" onClick={this.handleClick} data-mainitem="4" data-subitem="3"><span>{this.state.item43}</span></li>
                    <li class="item51" onClick={this.handleClick} data-mainitem="5" data-subitem="1"><span>{this.state.item51}</span></li>
                    <li class="item52" onClick={this.handleClick} data-mainitem="5" data-subitem="2"><span>{this.state.item52}</span></li>
                    <li class="item53" onClick={this.handleClick} data-mainitem="5" data-subitem="3"><span>{this.state.item53}</span></li>
                    <li class="item61" onClick={this.handleClick} data-mainitem="6" data-subitem="1"><span>{this.state.item61}</span></li>
                    <li class="item62" onClick={this.handleClick} data-mainitem="6" data-subitem="2"><span>{this.state.item62}</span></li>
                    <li class="item63" onClick={this.handleClick} data-mainitem="6" data-subitem="3"><span>{this.state.item63}</span></li>
                    <li class="item44" onClick={this.handleClick} data-mainitem="4" data-subitem="4"><span>{this.state.item44}</span></li>
                    <li class="item45" onClick={this.handleClick} data-mainitem="4" data-subitem="5"><span>{this.state.item45}</span></li>
                    <li class="item46" onClick={this.handleClick} data-mainitem="4" data-subitem="6"><span>{this.state.item46}</span></li>
                    <li class="item54" onClick={this.handleClick} data-mainitem="5" data-subitem="4"><span>{this.state.item54}</span></li>
                    <li class="item55" onClick={this.handleClick} data-mainitem="5" data-subitem="5"><span>{this.state.item55}</span></li>
                    <li class="item56" onClick={this.handleClick} data-mainitem="5" data-subitem="6"><span>{this.state.item56}</span></li>
                    <li class="item64" onClick={this.handleClick} data-mainitem="6" data-subitem="4"><span>{this.state.item64}</span></li>
                    <li class="item65" onClick={this.handleClick} data-mainitem="6" data-subitem="5"><span>{this.state.item65}</span></li>
                    <li class="item66" onClick={this.handleClick} data-mainitem="6" data-subitem="6"><span>{this.state.item66}</span></li>
                    <li class="item47" onClick={this.handleClick} data-mainitem="4" data-subitem="7"><span>{this.state.item47}</span></li>
                    <li class="item48" onClick={this.handleClick} data-mainitem="4" data-subitem="8"><span>{this.state.item48}</span></li>
                    <li class="item49" onClick={this.handleClick} data-mainitem="4" data-subitem="9"><span>{this.state.item49}</span></li>
                    <li class="item57" onClick={this.handleClick} data-mainitem="5" data-subitem="7"><span>{this.state.item57}</span></li>
                    <li class="item58" onClick={this.handleClick} data-mainitem="5" data-subitem="8"><span>{this.state.item58}</span></li>
                    <li class="item59" onClick={this.handleClick} data-mainitem="5" data-subitem="9"><span>{this.state.item59}</span></li>
                    <li class="item67" onClick={this.handleClick} data-mainitem="6" data-subitem="7"><span>{this.state.item67}</span></li>
                    <li class="item68" onClick={this.handleClick} data-mainitem="6" data-subitem="8"><span>{this.state.item68}</span></li>
                    <li class="item69" onClick={this.handleClick} data-mainitem="6" data-subitem="9"><span>{this.state.item69}</span></li>
                    <li class="item71" onClick={this.handleClick} data-mainitem="7" data-subitem="1"><span>{this.state.item71}</span></li>
                    <li class="item72" onClick={this.handleClick} data-mainitem="7" data-subitem="2"><span>{this.state.item72}</span></li>
                    <li class="item73" onClick={this.handleClick} data-mainitem="7" data-subitem="3"><span>{this.state.item73}</span></li>
                    <li class="item81" onClick={this.handleClick} data-mainitem="8" data-subitem="1"><span>{this.state.item81}</span></li>
                    <li class="item82" onClick={this.handleClick} data-mainitem="8" data-subitem="2"><span>{this.state.item82}</span></li>
                    <li class="item83" onClick={this.handleClick} data-mainitem="8" data-subitem="3"><span>{this.state.item83}</span></li>
                    <li class="item91" onClick={this.handleClick} data-mainitem="9" data-subitem="1"><span>{this.state.item91}</span></li>
                    <li class="item92" onClick={this.handleClick} data-mainitem="9" data-subitem="2"><span>{this.state.item92}</span></li>
                    <li class="item93" onClick={this.handleClick} data-mainitem="9" data-subitem="3"><span>{this.state.item93}</span></li>
                    <li class="item74" onClick={this.handleClick} data-mainitem="7" data-subitem="4"><span>{this.state.item74}</span></li>
                    <li class="item75" onClick={this.handleClick} data-mainitem="7" data-subitem="5"><span>{this.state.item75}</span></li>
                    <li class="item76" onClick={this.handleClick} data-mainitem="7" data-subitem="6"><span>{this.state.item76}</span></li>
                    <li class="item84" onClick={this.handleClick} data-mainitem="8" data-subitem="4"><span>{this.state.item84}</span></li>
                    <li class="item85" onClick={this.handleClick} data-mainitem="8" data-subitem="5"><span>{this.state.item85}</span></li>
                    <li class="item86" onClick={this.handleClick} data-mainitem="8" data-subitem="6"><span>{this.state.item86}</span></li>
                    <li class="item94" onClick={this.handleClick} data-mainitem="9" data-subitem="4"><span>{this.state.item94}</span></li>
                    <li class="item95" onClick={this.handleClick} data-mainitem="9" data-subitem="5"><span>{this.state.item95}</span></li>
                    <li class="item96" onClick={this.handleClick} data-mainitem="9" data-subitem="6"><span>{this.state.item96}</span></li>
                    <li class="item77" onClick={this.handleClick} data-mainitem="7" data-subitem="7"><span>{this.state.item77}</span></li>
                    <li class="item78" onClick={this.handleClick} data-mainitem="7" data-subitem="8"><span>{this.state.item78}</span></li>
                    <li class="item79" onClick={this.handleClick} data-mainitem="7" data-subitem="9"><span>{this.state.item79}</span></li>
                    <li class="item87" onClick={this.handleClick} data-mainitem="8" data-subitem="7"><span>{this.state.item87}</span></li>
                    <li class="item88" onClick={this.handleClick} data-mainitem="8" data-subitem="8"><span>{this.state.item88}</span></li>
                    <li class="item89" onClick={this.handleClick} data-mainitem="8" data-subitem="9"><span>{this.state.item89}</span></li>
                    <li class="item97" onClick={this.handleClick} data-mainitem="9" data-subitem="7"><span>{this.state.item97}</span></li>
                    <li class="item98" onClick={this.handleClick} data-mainitem="9" data-subitem="8"><span>{this.state.item98}</span></li>
                    <li class="item99" onClick={this.handleClick} data-mainitem="9" data-subitem="9"><span>{this.state.item99}</span></li>
                </ul>
            </div>
        )
    }
}
export default LeftSide;
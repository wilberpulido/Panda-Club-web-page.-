import React from 'react';
import './SubMenu.css';
import subMenuObj from './subMenuObj';


class SubMenu extends React.Component{

    render(){
        return (
            <div className='subMenu'>

                <ul id ='subSites'
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}>
                    {subMenuObj.sites.map(site=>{
                    return <li className='individualSites'
                            onMouseOver={this.props.changedColor}
                            onMouseOut={this.props.unChangedColor}
                            key={site.key}>{site.site}
                            </li>
                    })
                    }
                </ul>

                <ul id ='subBenefits'
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}>
                    {subMenuObj.benefits.map(benefit=>{
                    return <li className='individualBenefits'
                            onMouseOver={this.props.changedColor}
                            onMouseOut={this.props.unChangedColor}
                            key={benefit.key}>{benefit.benefit}
                            </li>
                    })
                    }
                </ul>
                <ul>
                    <li>
                    <img id="logo" src='https://www.dw.com/image/39558053_403.jpg'/> 
                    </li>
                </ul>
                <ul id ='subSubcription'
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}>
                    {subMenuObj.subcription.map(planes=>{
                    return <li className='individualSubcription'
                            onMouseOver={this.props.changedColor}
                            onMouseOut={this.props.unChangedColor}
                            key={planes.key}>{planes.plan}</li>
                    })
                    }
                </ul>

                <ul id ='subGalery'
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}>
                    {subMenuObj.galery.map(dis=>{
                    return <li className='individualGalery'
                            onMouseOver={this.props.changedColor}
                            onMouseOut={this.props.unChangedColor}
                            key={dis.key}>{dis.display}</li>
                    })
                    }
                </ul>
            </div>

            );
    }

}
export default SubMenu;

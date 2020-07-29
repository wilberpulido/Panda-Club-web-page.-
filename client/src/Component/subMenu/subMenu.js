import React from 'react';
import './SubMenu.css';
import subMenuObj from './subMenuObj';


class SubMenu extends React.Component{
    
    handlerEventMouseOverSubMenu(Event){
        if (Event.target.id == 'subSites' || Event.target.className == 'individualSites') {
            document.getElementById('subSites').style.visibility='visible';

        }else if (Event.target.id == 'subBenefits' || Event.target.className == 'individualBenefits') {
            document.getElementById('subBenefits').style.visibility='visible';

        }else if (Event.target.id == 'subSubcription' || Event.target.className == 'individualSubcription') {
            document.getElementById('subSubcription').style.visibility='visible';
            
        }else if (Event.target.id == 'subGalery' || Event.target.className == 'individualGalery') {
            document.getElementById('subGalery').style.visibility='visible';
        }
    }

    handlerEventMouseOutSubMenu(Event){
        if (Event.target.id == 'subSites' || Event.target.className == 'individualSites') {
            document.getElementById('subSites').style.visibility='hidden';
        }else if (Event.target.id == 'subBenefits' || Event.target.className == 'individualBenefits') {
            document.getElementById('subBenefits').style.visibility='hidden';

        }else if (Event.target.id == 'subSubcription' || Event.target.className == 'individualSubcription') {
            document.getElementById('subSubcription').style.visibility='hidden';
        }else if (Event.target.id == 'subGalery' || Event.target.className == 'individualGalery') {
            document.getElementById('subGalery').style.visibility='hidden';
        }
    }

    render(){
        return (
            <div className='subMenu'>

                <ul id ='subSites' onMouseOver={this.handlerEventMouseOverSubMenu}
                    onMouseOut={this.handlerEventMouseOutSubMenu}>
                    {subMenuObj.sites.map(site=>{
                    return <li className='individualSites'
                            key={site.key}>{site.site}</li>
                    })
                    }
                </ul>

                <ul id ='subBenefits' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}>
                    {subMenuObj.benefits.map(benefit=>{
                    return <li className='individualBenefits'
                            key={benefit.key}>{benefit.benefit}</li>
                    })
                    }
                </ul>

                <ul>
                    <li> <img id="logo" src='https://www.dw.com/image/39558053_403.jpg'/> </li>
                </ul>

                <ul id ='subSubcription' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}>
                    {subMenuObj.subcription.map(planes=>{
                    return <li className='individualSubcription'
                            key={planes.key}>{planes.plan}</li>
                    })
                    }
                </ul>

                <ul id ='subGalery' onMouseOver={this.handlerEventMouseOverSubMenu}
                onMouseOut={this.handlerEventMouseOutSubMenu}>
                    {subMenuObj.galery.map(dis=>{
                    return <li className='individualGalery'
                            key={dis.key}>{dis.display}</li>
                    })
                    }
                </ul>
            </div>

            );
    }

}
export default SubMenu;

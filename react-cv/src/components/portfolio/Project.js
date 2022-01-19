import React, { Component } from 'react';

class Project extends Component {
    // Gestion de l'effet d'apparition de la pop-up description
    state = {
        showInfo: false
    }

    // inverse le statut du state : false > true
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let {name, languagesIcons, source, info, picture} = this.props.item;
        return (
            // Mise en page des cards projets
           <div className="project">
               <div className="icons">
                   {languagesIcons.map(icon => 
                       <i className={icon} key={icon}></i>
                   )}
               </div>
               <h3>{name}</h3>
               <img src={picture} alt="" onClick={this.handleInfo} />
               <span className="infos" onClick={this.handleInfo}>
                   <i className="fas fa-plus-circle"></i>
               </span>

               {
                   // Si showInfo est true
                   this.state.showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <div className="sourceCode">
                                    <a href={source} rel="noopener noreferrer" className="button" target="blank">Code source du projet</a>
                                </div>
                            </div>

                            <p className="text">{info}</p>

                            <div className="button return" onClick={this.handleInfo}>Retour</div>
                        
                        </div>
                    </div>
                   )
               }
           </div>
        );
    }
}

export default Project;
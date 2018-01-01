import React,{Component} from 'react';
import styled from 'styled-components';



class Header extends Component{
    render(){
        return(
        <div>
            <header>
                <h1>Balesabu Godugu</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">conferences</a>
                    <a href="#">Tech Talks</a>
                    <a href="#">Port Folio</a>

                </nav>

            </header>
            <hr/>
            
        </div>)
    }
}

export default Header;
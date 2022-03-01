import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const OuterContainer=styled.div`
background-image: url("https://images.unsplash.com/photo-1644048778858-e6b0cf246a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80");
height: 100vh;
background-attachment: fixed;
`

const Container=styled.div`
margin: 0rem 8rem;
width: 80%;
`
const InnerContainer=styled.div`
width: 100%;
color: white;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding: 10px;
`
const MainContainer=styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
height: 75vh;
justify-content: center;
align-items: center;
color: white;
`


export default function Home() {
    return (
        <OuterContainer>
            <Container>
              <InnerContainer>
                  <div >
                      <h2 >UserManagement</h2>
                  </div>
                  
              </InnerContainer>
                <MainContainer>
                    <div><h3 style={{color:"black"}}>Manage your users by clicking below </h3></div>
                    <div><button className="btn btn-success"><Link to="/user" style={{textDecoration:"none" ,color:"inherit"}}><h6>User Control</h6></Link></button></div>
                </MainContainer>
              </Container>
              </OuterContainer>
    )
}
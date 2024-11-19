import React from 'react';
import Card from '../../components/Cards/Card';
import { images } from  '../../constants';
import './About.css';

const About = () => {
  return (
    <div>
      <section style={{ width: 100 + "%", height: 700 + "px", backgroundColor: "white" }}>
        <h1 style={{ marginTop: 20 + "px", textAlign: "center" }}>Learn How We Empower Farmers </h1>

        <div className="card-container">
        <Card backgroundImage={images.q1}/>
        <Card backgroundImage={images.q2}/>
        </div>
      </section>
    </div>
  )
}

export default About

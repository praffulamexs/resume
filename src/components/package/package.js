import React from "react";
import "./package.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Package() {
  const opening = "{";
  const closing = "}";
  const spacing = <span>&nbsp;&nbsp;&nbsp;</span>;
  return (
    <div className="package_container">
      <span>{spacing}</span>      
      <span>
        <span className="code_line">1</span>
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">2</span>
        {spacing}
        {spacing}
        <span className="keys">"name": </span>
        <span className="values">"Prafful Jagtap"</span>,
      </span>

      <span>
        <span className="code_line">3</span>
        {spacing}
        {spacing}
        <span className="keys">"role": </span>
        <span className="values">"Software Developer"</span>,
      </span>

      <span>
        <span className="code_line">4</span>
        {spacing}
        {spacing}
        <span className="keys">"open_for_opportunities": </span>
        <span className="bool">true</span>,
      </span>

      <span>
        <span className="code_line">5</span>
        {spacing}
        {spacing}
        <span className="keys">"work_experience": </span> [
        <span className="comments"> // Hover over the text... </span>
      </span>

      <span>
        <span className="code_line">6</span>
        {spacing}
        {spacing}
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">7</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"role": </span>
        <span className="values">"Software Developer"</span>,
      </span>

      <span>
        <span className="code_line">8</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"company": </span>
        <a
          href="http://transfinite.one/"
          target="_blank"
          className="values key_link"
        >
          "Transfinite Innovative Solutions Pvt. Ltd."
        </a>
        ,
      </span>

      <span>
        <span className="code_line">9</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"location": </span>
        <a
          href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India/@19.0821978,72.7411,11z/data=!3m1!4b1!4m5!3m4!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559"
          target="_blank"
          className="values key_link"
        >
          "Mumbai, India"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">10</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"date": </span>
        <span className="values">"August 2018 - December 2018"</span>,
      </span>

      <span>
        <span className="code_line">11</span>
        {spacing}
        {spacing}
        {spacing}
        {closing},
      </span>

      <span>
        <span className="code_line">12</span>
        {spacing}
        {spacing}
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">13</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"role": </span>
        <span className="values">"Freelance Software Developer"</span>,
      </span>

      <span>
        <span className="code_line">14</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"date": </span>
        <span className="values">"January 2018 - July 2018"</span>,
      </span>

      <span>
        <span className="code_line">15</span>
        {spacing}
        {spacing}
        {spacing}
        {closing},
      </span>

      <span>
        <span className="code_line">16</span>
        {spacing}
        {spacing}
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">17</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"role": </span>
        <span className="values">"Associate Software Developer"</span>,
      </span>

      <span>
        <span className="code_line">18</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"company": </span>
        <a
          href="https://www.centilliontech.in/"
          target="_blank"
          className="values key_link"
        >
          "Centillion - A Division of Amexs Business Solutions Pvt. Ltd."
        </a>
        ,
      </span>

      <span>
        <span className="code_line">19</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"location": </span>
        <a
          href="https://www.google.com/maps/place/CBD+Belapur,+Navi+Mumbai,+Maharashtra,+India/@19.0197284,73.0090194,13z/data=!3m1!4b1!4m5!3m4!1s0x3be7c252fe17a561:0xa9c5235c8b6d26de!8m2!3d19.0237174!4d73.0403933"
          target="_blank"
          className="values key_link"
        >
          "CBD Belapur, Navi Mumbai, India"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">20</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"date": </span>
        <span className="values">"June 2017 - December 2017"</span>,
      </span>

      <span>
        <span className="code_line">21</span>
        {spacing}
        {spacing}
        {spacing}
        {closing}
      </span>

      <span>
        <span className="code_line">22</span>
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">23</span>
        {spacing}
        {spacing}
        <span className="keys">"education": </span> [
        <span className="comments"> // Hover over the text... </span>
      </span>

      <span>
        <span className="code_line">24</span>
        {spacing}
        {spacing}
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">25</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"degree": </span>
        <a
          className="values key_link"
          href="https://coursefinder.uow.edu.au/information/index.html?course=master-computer-science-machine-learning-big-data"
          target="_blank"
        >
          "Master's in Computer Science"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">26</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"university": </span>
        <a
          className="values key_link"
          href="https://www.uow.edu.au/"
          target="_blank"
        >
          "University of Wollongong"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">27</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"specialization": </span>
        <a
          className="values key_link"
          href="https://coursefinder.uow.edu.au/information/index.html?course=master-computer-science-machine-learning-big-data"
          target="_blank"
        >
          "Machine Learning and Big Data"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">28</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"currently_enrolled": </span>
        <span className="bool">true</span>,
      </span>

      <span>
        <span className="code_line">29</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"graduation": </span>
        <span className="values">"December 2020"</span>,
      </span>

      <span>
        <span className="code_line">30</span>
        {spacing}
        {spacing}
        {spacing}
        {closing},
      </span>

      <span>
        <span className="code_line">31</span>
        {spacing}
        {spacing}
        {spacing}
        {opening}
      </span>

      <span>
        <span className="code_line">32</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"degree": </span>
        <a
          className="values key_link"
          href="http://archive.mu.ac.in/science/cs/profile.html"
          target="_blank"
        >
          "Bachelor's in Computer Science"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">33</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"university": </span>
        <a
          className="values key_link"
          href="http://archive.mu.ac.in/index.html"
          target="_blank"
        >
          "University of Mumbai"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">34</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"currently_enrolled": </span>
        <span className="bool">false</span>,
      </span>

      <span>
        <span className="code_line">35</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"graduation": </span>
        <span className="values">"June 2017"</span>,
      </span>

      <span>
        <span className="code_line">36</span>
        {spacing}
        {spacing}
        {spacing}
        {closing}
      </span>

      <span>
        <span className="code_line">37</span>
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">38</span>
        {spacing}
        {spacing}
        <span className="keys">"technical_skills": </span> {opening}
      </span>

      <span>
        <span className="code_line">39</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"skills": </span> [
      </span>

      <span>
        <span className="code_line">40</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Web Development"</span>,
      </span>

      <span>
        <span className="code_line">41</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">
          "Machine Learning and Big Data Analytics"
        </span>
        ,
      </span>

      <span>
        <span className="code_line">42</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">
          "Hybid / Cross-Platform Mobile Application Development"
        </span>
        ,
      </span>

      <span>
        <span className="code_line">43</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Database Management"</span>,
      </span>

      <span>
        <span className="code_line">44</span>
        {spacing}
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">45</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"languages": </span> [
      </span>

      <span>
        <span className="code_line">46</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"JavaScript"</span>,
      </span>

      <span>
        <span className="code_line">47</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Python"</span>,
      </span>

      <span>
        <span className="code_line">48</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"C++"</span>,
      </span>

      <span>
        <span className="code_line">49</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"R"</span>,
      </span>

      <span>
        <span className="code_line">50</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"PHP"</span>,
      </span>

      <span>
        <span className="code_line">51</span>
        {spacing}
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">52</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"technologies": </span> [
      </span>

      <span>
        <span className="code_line">53</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"ReactJS"</span>,
      </span>

      <span>
        <span className="code_line">54</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Angular"</span>,
      </span>

      <span>
        <span className="code_line">55</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"NodeJS"</span>,
      </span>

      <span>
        <span className="code_line">56</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Ionic Framework"</span>,
      </span>

      <span>
        <span className="code_line">57</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Amazon Web Services"</span>,
      </span>

      <span>
        <span className="code_line">58</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Laravel"</span>,
      </span>

      <span>
        <span className="code_line">59</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Firebase"</span>,
      </span>

      <span>
        <span className="code_line">60</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"NativeScript"</span>,
      </span>

      <span>
        <span className="code_line">61</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Git"</span>,
      </span>

      <span>
        <span className="code_line">62</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"SSH"</span>,
      </span>

      <span>
        <span className="code_line">63</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Tensorflow"</span>,
      </span>

      <span>
        <span className="code_line">64</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Keras"</span>,
      </span>

      <span>
        <span className="code_line">65</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Scikit-Learn"</span>,
      </span>

      <span>
        <span className="code_line">66</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Jupyter-Notebook"</span>,
      </span>

      <span>
        <span className="code_line">67</span>
        {spacing}
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">68</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"database": </span> [
      </span>

      <span>
        <span className="code_line">69</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"MySQL"</span>,
      </span>

      <span>
        <span className="code_line">70</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"MongoDB"</span>,
      </span>

      <span>
        <span className="code_line">71</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Oracle SQL"</span>,
      </span>

      <span>
        <span className="code_line">72</span>
        {spacing}
        {spacing}
        {spacing}
        ],
      </span>

      <span>
        <span className="code_line">73</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"machine_learning": </span> [
      </span>

      <span>
        <span className="code_line">74</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Regression"</span>,
      </span>

      <span>
        <span className="code_line">75</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Classification"</span>,
      </span>

      <span>
        <span className="code_line">76</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Clustering"</span>,
      </span>

      <span>
        <span className="code_line">77</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Association Rules"</span>,
      </span>

      <span>
        <span className="code_line">78</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Time Series Analysis"</span>,
      </span>

      <span>
        <span className="code_line">79</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Text Analysis"</span>,
      </span>

      <span>
        <span className="code_line">80</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Neural Network"</span>,
      </span>

      <span>
        <span className="code_line">81</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Deep Learning / Deep Neural Network"</span>,
      </span>

      <span>
        <span className="code_line">82</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Convolutional Neural Network"</span>,
      </span>
      
      <span>
        <span className="code_line">83</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Sentiment Analysis"</span>,
      </span>

      <span>
        <span className="code_line">84</span>
        {spacing}
        {spacing}
        {spacing}
        {spacing}
        <span className="values">"Reinforcement Learning"</span>
      </span>

      <span>
        <span className="code_line">85</span>
        {spacing}
        {spacing}
        {spacing}
        ]
      </span>

      <span>
        <span className="code_line">86</span>
        {spacing}
        {spacing}
        {closing},
      </span>

      <span>
        <span className="code_line">87</span>
        {spacing}
        {spacing}
        <span className="keys">"contact_details": </span> {opening}
        <span className="comments"> // Hover over the text... </span>
      </span>

      <span>
        <span className="code_line">88</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"email": </span>
        <a
          className="values key_link"
          href="mailto:prafful.jagtap1995@gmail.com"
        >
          "prafful.jagtap1995@gmail.com"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">89</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"mobile_number": </span>
        <a className="values key_link" href="tel:+61448336086">
          "+61-448336086"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">90</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"skype": </span>
        <span className="values">"praffulamexs@hotmail.com"</span>,
      </span>

      <span>
        <span className="code_line">91</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"linkedin": </span>
        <a
          className="values key_link"
          href="https://www.linkedin.com/in/prafful-jagtap/"
          target="_blank"
        >
          "linkedin.com/in/prafful-jagtap"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">92</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"github": </span>
        <a
          className="values key_link"
          href="https://github.com/praffulamexs"
          target="_blank"
        >
          "github.com/praffulamexs"
        </a>
        ,
      </span>

      <span>
        <span className="code_line">93</span>
        {spacing}
        {spacing}
        {spacing}
        <span className="keys">"location": </span>
        <a
          className="values key_link"
          href="https://www.google.com/maps/place/Wollongong+NSW+2500/@-34.4282514,150.8755489,14z/data=!3m1!4b1!4m5!3m4!1s0x6b1319a51f0b567b:0x5017d681632e720!8m2!3d-34.4278121!4d150.8930607"
          target="_blank"
        >
          "Wollongong, Australia"
        </a>
      </span>

      <span>
        <span className="code_line">94</span>
        {spacing}
        {spacing}
        {closing}
      </span>

      <span>
        <span className="code_line">95</span>
        {spacing}
        {closing}
      </span>
      <span>{spacing}</span>
    </div>
  );
}

export default Package;

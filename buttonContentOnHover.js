<div className='title'>
    A whole new reality<br /> on the palm.
    <div className="sub-title">Rethinking the mechanics of a marketplace</div>
    <button className='links' id='mygoko-btn'disabled>
        <p className='mygoko'>Mygoko.com</p>
        <p className='coming-soon'>Coming Soon</p>
    </button>
 </div>
 
 // ================= css =====================

.mygoko {
    font-family: 'Open Sans', sans-serif;
    color: #FFFFFF;
    transition: 0.3s ease-out;
    font-size: 1rem;
    display: flex;  
    margin-left: -0px;
    background: none;
}

.coming-soon {
    font-family: 'Open Sans', sans-serif;
    transition: 0.3s ease-out;
    font-size: 0.97rem;
    display: flex;  
    margin-left: -0px;
    background: none;
    color: #101214;
    font-weight: 600;
}

button .coming-soon { display: none; }
button:hover .mygoko 
{ 
  display: none; 
  transition: 0.2s ease-out;
}
button:hover .coming-soon 
{ 
  display: inline; 
  transition: 0.2s ease-out;
}

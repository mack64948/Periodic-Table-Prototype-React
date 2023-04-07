import "./index.css"

export const PTable = ({legendChild,tableWidth,tableHeight,colorSchemeDict}) => {
    let tableStyle =  {
        width: tableWidth,
        height: tableHeight
    }
    return ( <div style={tableStyle} className="table-container">
    
    <div style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}} className="element element-h">H</div>
    <div className="filler-2-1"></div>
    <div className="filler-col-3-10-row-1-4">
        {legendChild}
    </div>
    <div className="filler-13-5"></div>
    <div 
    style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-he">He</div>

    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}
        className="element element-li">Li</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-be">Be</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-b">B</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-c">C</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-n">N</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-o">O</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-f">F</div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-ne">Ne</div>

    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}
        className="element element-na">Na</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-mg">Mg</div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-al">Al</div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}}
        className="element element-si">Si</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-p">P</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-s">S</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-cl">Cl</div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-ar">Ar</div>

    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}
        className="element element-k">K</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-ca">Ca</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-sc">Sc</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ti">Ti</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-v">V</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-cr">Cr</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-mng">Mn</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-fe">Fe</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-co">Co</div>
    <div
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ni">Ni</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-cu">Cu</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-zn">Zn</div>

 
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-ga">Ga</div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}}
        className="element element-ge">Ge</div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}}
        className="element element-as">As</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-se">Se</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-br">Br</div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-kr">Kr</div>


    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}
        className="element element-rb">Rb</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-sr">Sr</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-y">Y</div>
    <div
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-zr">Zr</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-nb">Nb</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-mo">Mo</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-tc">Tc</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ru">Ru</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}

        className="element element-rh">Rh</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-pd">Pd</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ag">Ag</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-cd">Cd</div>

 
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-in">In</div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-sn">Sn</div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}}
        className="element element-sb">Sb</div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}}
        className="element element-te">Te</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-i">I</div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-xe">Xe</div>

    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}  
        className="element element-cs">Cs</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-ba">Ba</div>

    <div className="connector">
        <p>57-71</p>
        <p>89-103</p>
        <p></p>
        <p>6</p>
        <p>7</p>
    </div>

    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-hf">Hf</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ta">Ta</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-w">W</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-re">Re</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-os">Os</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-ir">Ir</div>
    <div         
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-pt">Pt</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-au">Au</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-hg">Hg</div>

    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-tl">Tl</div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-pb">Pb</div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-bi">Bi</div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}}
        className="element element-po">Po</div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}}
        className="element element-at">At</div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}}
        className="element element-rn">Rn</div>


    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}}
        className="element element-fr">Fr</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}}
        className="element element-ra">Ra</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-rf">Rf</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-db">Db</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-sg">Sg</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-bh">Bh</div>
    <div 
        style={{backgroundColor: colorSchemeDict["transition-metals"]}}
        className="element element-hs">Hs</div>

    <div className="element element-mt">Mt</div>
    <div className="element element-ds">Ds</div>
    <div className="element element-rg">Rg</div>
    <div className="element element-cn">Cn</div>
    <div className="element element-nh">Nh</div>
    <div className="element element-fl">Fl</div>
    <div className="element element-mc">Mc</div>
    <div className="element element-lv">Lv</div>
    <div className="element element-ts">Ts</div>
    <div className="element element-og">Og</div>

    <div className="filler-r-8-9-c-1-3"></div>
    <div className="filler-r-8-9-c-4-end">
        For elements with no stable isotopes, the mass number of the isotope with the longest half-life is in parentheses.
    </div>
    
    <div className="filler-r-9-10-c-1-3"></div>
    <div className="filler-r-10-11-c-1-3"></div>

    <div className="element element-la">La</div>
    <div className="element element-ce">Ce</div>
    <div className="element element-pr">Pr</div>
    <div className="element element-nd">Nd</div>
    <div className="element element-pm">Pm</div>
    <div className="element element-sm">Sm</div>
    <div className="element element-eu">Eu</div>
    <div className="element element-gd">Gd</div>
    <div className="element element-tb">Tb</div>
    <div className="element element-dy">Dy</div>
    <div className="element element-ho">Ho</div>
    <div className="element element-er">Er</div>

    <div className="element element-tm">Tm</div>
    <div className="element element-yb">Yb</div>
    <div className="element element-lu">Lu</div>


    <div className="element element-ac">Ac</div>
    <div className="element element-th">Th</div>
    <div className="element element-pa">Pa</div>
    <div className="element element-u">U</div>
    <div className="element element-np">Np</div>
    <div className="element element-pu">Pu</div>
    <div className="element element-am">Am</div>
    <div className="element element-cm">Cm</div>
    <div className="element element-bk">Bk</div>
    <div className="element element-cf">Cf</div>
    <div className="element element-es">Es</div>
    <div className="element element-fm">Fm</div>

    <div className="element element-md">Md</div>
    <div className="element element-no">No</div>
    <div className="element element-lr">Lr</div>



















</div>)
}
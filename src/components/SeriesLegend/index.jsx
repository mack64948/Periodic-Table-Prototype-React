import "./index.css"


export const SeriesLegend = ({width,height, colorSchemeDict}) => {

    let spanStyle = {
        width: "100px"
    }

    let tableStyle = {
        width: width,
        height: height
    }

    return ( <div style={tableStyle} className="legend-table">
    <div className="label-metals rounded-top-corners center-text-horizontal">Metals</div>
    <div className="label-nonmetals rounded-top-corners center-text-horizontal">Nonmetals</div>
    <div 
        style={{backgroundColor: colorSchemeDict["alkali-metals"]}} 
        className="col-alkali-metals center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Alkali Metals</span>
    </div>
    <div
        style={{backgroundColor: colorSchemeDict["alkaline-earth-metals"]}} 
        className="col-alkaline-earth-metals center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Alkaline Earth Metals</span>

    </div>
    <div 
        style={{backgroundColor: colorSchemeDict["lanthanoids"]}} 
        className="col-lanthanoids center-text-horizontal">Lanthanoids</div>
    <div 
        style={{backgroundColor: colorSchemeDict["actinoids"]}} 
        className="col-actinoids center-text-horizontal">Actinoids</div>
    <div
        style={{backgroundColor: colorSchemeDict["transition-metals"]}} 
        className="col-transition-metals center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Transition Metals</span>

    </div>
    <div 
        style={{backgroundColor: colorSchemeDict["post-transition-metals"]}} 
        className="col-post-transition-metals center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Post-transition Metals</span>

    </div>
    <div 
        style={{backgroundColor: colorSchemeDict["metalloids"]}} 
        className="col-metalloids center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Metalloids</span>

    </div>
    <div 
        style={{backgroundColor: colorSchemeDict["reactive-nonmetals"]}} 
        className="col-reactive-nonmetals center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Reactive nonmetals</span>

    </div>
    <div 
        style={{backgroundColor: colorSchemeDict["noble-gases"]}} 
        className="col-noble-gases center-text-horizontal">
        <span style={spanStyle} className="rotate-90-clockwise">Noble gases</span>

    </div>



</div>);
}
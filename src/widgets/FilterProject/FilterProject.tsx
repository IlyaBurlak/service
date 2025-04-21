
function FilterProject() {
    return (
        <nav className="filter-menu">
            <div className="menu-items">
                <button className="menu-item filter all"> All</button>
                <button className="menu-item filter lite"> Lite</button>
                <button className="menu-item filter medium"> Medium</button>
                <button className="menu-item filter hard"> Hard</button>
            </div>
        </nav>
    )
}
export default FilterProject;
import ListChanel from "@/components/list_chanel";

const Chanel = () => {
    return(
    <div className="chanel-container">
        <aside>
            <header>
                <h3>Listes des cannaux</h3><br/>
                <input type="text" placeholder="où est ?" />
            </header>
            <ListChanel/>
        </aside>
    </div>
    )
}

export default Chanel;
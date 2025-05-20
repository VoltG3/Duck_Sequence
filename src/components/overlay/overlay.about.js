import { StyledOverlayContainer as OverlayContainer} from "./overlay.styles"
import { StyledOverlay as Overlay } from "./overlay.styles"
import { ButtonOverlayCloseAbout } from "../btn/button.overlay.close.about"
import { useContext } from "react"
import { DataContext } from "../../data_context/DataContext"
import { useSelector } from "react-redux"
import config from "../../config"

export const OverlayAbout = () => {
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const { aboutData } = useContext(DataContext)
    const targetAbout = useSelector(state => state.actions.visible_overlay_section_about)

    const isVisible = targetAbout !== false

    const executedSessionsSum = useSelector(state => state.statistics.statistics_total_sessions)
    const executedRoundsSum = useSelector(state => state.statistics.statistics_total_rounds)

    if (!isDataLoaded) {
        return <p>Loading dates…</p>
    }

    return (
        <OverlayContainer $visible={ isVisible }>
           <Overlay>
               <div className="innerOverlay">
                   <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 1)" }}>
                       <h2>About</h2>
                       <ButtonOverlayCloseAbout />
                   </div>

                   <div>
                       <p className={"inline-p"}>Sessions executed:{" "}
                           <span className={"inline-span"}>
                               { executedSessionsSum }
                           </span>
                           {" "}Total rounds:{" "}
                           <span className={"inline-span"}>
                               { executedRoundsSum }
                           </span>
                       </p>
                   </div>

                   <div>
                       {Array.isArray(aboutData) && aboutData.map((lineObj, index) => {
                           const text = Object.values(lineObj)[0]
                           return (
                               <p key={index} className="about-line">
                                   {text}
                               </p>
                           )
                       })}
                   </div>

                   <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: "calc(var(--space) * 1)" }}>
                       <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"auto", height: "auto", }}>
                           <p>Level Top Up</p>
                           <img style={{ width:"auto", height: "auto" }} src={config.level_top_up.URL_level_top_up_15} alt="top level up" />
                       </div>

                       <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"auto", height: "auto", }}>
                           <p>Level Up</p>
                           <img style={{ width:"auto", height: "auto" }} src={config.level_up.URL_level_up_15} alt="top level up" />
                       </div>

                       <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"auto", height: "auto", }}>
                           <p>Level Equal</p>
                           <img style={{ width:"70px", height: "auto" }} src={config.level_equal.URL_level_equal_15} alt="top level up" />
                       </div>

                       <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"auto", height: "auto", }}>
                           <p>Level Down</p>
                           <img style={{ width:"auto", height: "auto" }} src={config.level_down.URL_level_down_14} alt="top level up" />
                       </div>

                       <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width:"auto", height: "auto", }}>
                           <p>Level Top Down</p>
                           <img style={{ width:"80px", height: "auto" }} src={config.level_top_down.URL_level_top_down_18} alt="top level up" />
                       </div>
                   </div>

                   <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "auto", }}>
                       <div style={{ display: "flex", flexDirection: "column", width:"auto", height: "auto"}}>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--0A)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--0A-p)"}}>Infinity</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--0B)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--0B)"}}>Mythic</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--01)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--01)"}}>Legendary</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--02)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--02)"}}>Epic</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--03)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--03)"}}>Rare</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--04)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--04)"}}>Uncommon</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"20px", height:"20px",  marginRight: "5px"}}>
                                   <div style={{ display: "flex", alignSelf: "center", width:"15px", height:"15px", background: "var(--range--color--05)" }}></div>
                               </div>
                               <p style={{color:"var(--range--color--05)"}}>Common</p>
                           </div>
                       </div>

                       <div style={{ display: "flex", flexDirection: "column", width:"auto", height: "auto", marginLeft: "5px"}}>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--0A-p)"}}>if first place five times </p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--0B)"}}>if first place three times</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--01)"}}>first place</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--02)"}}>second place</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--03)"}}>third place</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--04)"}}>without range</p>
                           </div>
                           <div style={{ display: "flex", flexDirection: "row", width:"auto", height: "20px"}}>
                               <p style={{color: "var(--range--color--05)"}}>if score 0</p>
                           </div>
                       </div>
                   </div>
               </div>
           </Overlay>
        </OverlayContainer>
    )
}
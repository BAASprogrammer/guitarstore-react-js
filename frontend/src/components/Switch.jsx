import { useColor } from '../contexts/ColorProvider';

export default function Switch() {
    const {isDarkTheme,toggleTheme} = useColor()

    return (
        <div className="mode-dark-light">
            {!isDarkTheme ? (
                <button className="icon icon-sun" title='Activar modo oscuro' onClick={toggleTheme}>
                    <img src={require("../images/sun.png")} alt="Sol" width={20} height={20}/>
                </button>
            ) : (
                <button className="icon icon-moon" title='Desactivar modo oscuro' onClick={toggleTheme}>
                    <img src={require("../images/moon-dark.png")} alt="Luna" width={20} height={20}/>
                </button>
            )}
        </div>
    );
}

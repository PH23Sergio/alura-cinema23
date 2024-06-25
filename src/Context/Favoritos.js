import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()

FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext)

    function agregarFavorito(nuevoFavorito) {
        const favoritoRepetido = favorito.some(
            item => item.id === nuevoFavorito.id
        );

        let nuevalista = [...favorito]
        if (!favoritoRepetido) {
            nuevalista.push(nuevoFavorito)
            return setFavorito(nuevalista)
        }
        nuevalista = favorito.filter(item => item.id !== nuevoFavorito.id)
        return setFavorito(nuevalista)
    }
    return { favorito, agregarFavorito }
}
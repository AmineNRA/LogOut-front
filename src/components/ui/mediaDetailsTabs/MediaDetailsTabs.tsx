import { useState } from "react";

type MediaDetailsTabsProps = {
    listOfTabs: componentMap[],
}

type componentMap = {
    name: string,
    component: React.JSX.Element,
}

export default function MediaDetailsTabs({ listOfTabs }: MediaDetailsTabsProps) {

    /*
    listOfTabs va être un tableau d'objet qui va se composer comme suit {name:string,component:<React.composant>}
    Une liste va être ordonné pour afficher tous les name et le name qui sera dans le useState affichera le composant
    */

    const [userSelect, setUserSelect] = useState(listOfTabs[0]?.name);


    const findComponent = listOfTabs.find((element) => element.name === userSelect);

    return (
        <section className="col-span-2">
            {listOfTabs.length > 0 &&
                <>
                    <ul className="flex gap-4 text-app-text font-bold text-lg border-b-3 border-b-app-border">
                        {listOfTabs.map((element) => (<li className="hover:text-app-hover cursor-pointer" key={element.name} onClick={() => setUserSelect(element.name)}>{element.name}</li>))}
                    </ul>
                    <section >
                        {findComponent?.component}
                    </section>
                </>
            }
        </section>
    )
}
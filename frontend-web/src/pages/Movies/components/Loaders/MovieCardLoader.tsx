import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "core/utils/list";

const MovieCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={288}
                    height={324}
                    backgroundColor="#6C6C6C"
                    foregroundColor="#acacac"
                >
                    <rect x="0" y="30" rx="0" ry="20" width="258" height="324" />
                </ContentLoader>
            ))}
        </>
    )
}

export default MovieCardLoader

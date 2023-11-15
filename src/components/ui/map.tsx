import {ComposableMap, Geographies, Geography, Annotation} from "react-simple-maps";

export function Map() {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1600,
            }}
            style={{width: "100%", height: "100%"}}
        >
            <Geographies fill="#2C065D" geography="/features.json" stroke="#FFFFFF" strokeWidth={0.5}>
                {({geographies}) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
            </Geographies>
            <Annotation
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                }}
                dx={-90}
                dy={-30}
                subject={[2.3522, 48.8566]}
            >
                <text alignmentBaseline="middle" fill="white" textAnchor="end" x="-8">
                    {"Argentina"}
                </text>
            </Annotation>
        </ComposableMap>
    );
}

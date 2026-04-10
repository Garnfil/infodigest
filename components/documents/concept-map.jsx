"use client";
import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

export default function ConceptMap({ graphData }) {
    console.log(graphData);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        if (graphData) {
            const formattedNodes = graphData.nodes.map((node, index) => ({
                id: node.id,
                data: { label: node.label },
                position: { x: 100 + index * 150, y: 100 + (index % 3) * 100 },
                style: {
                    padding: 10,
                    borderRadius: 12,
                    backgroundColor: "#F0F4F8",
                    border: "1px solid #ccc",
                },
            }));

            const formattedEdges = graphData.edges.map((edge) => ({
                id: `${edge.source}-${edge.target}`,
                source: edge.source,
                target: edge.target,
                label: edge.label,
                animated: true,
                style: { stroke: "#1D4ED8" },
                labelBgPadding: [6, 3],
                labelBgBorderRadius: 4,
                labelBgStyle: { fill: "#fff" },
                type: "default", // explicitly set edge type
            }));

            setNodes(formattedNodes);
            setEdges(formattedEdges);
        }
    }, [graphData]);

    return (
        <div style={{ width: "100%", height: "600px" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                defaultEdgeOptions={{ type: "default" }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
}

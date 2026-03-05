import { useEffect, useRef } from "react";

const TableauViz = ({ vizName }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const objectEl = document.createElement("object");
    objectEl.className = "tableauViz";

    objectEl.style.width = "100%";
    objectEl.style.height = "100%";

    objectEl.innerHTML = `
      <param name="host_url" value="https://public.tableau.com/" />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value="" />
      <param name="name" value="${vizName}" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="no" />
      <param name="animate_transition" value="yes" />
      <param name="display_spinner" value="yes" />
      <param name="display_overlay" value="yes" />
      <param name="display_count" value="no" />
      <param name="language" value="en-US" />
    `;

    containerRef.current.appendChild(objectEl);

    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    containerRef.current.appendChild(script);
  }, [vizName]);

  return (
    <div className="tableau-container">
      <div ref={containerRef} className="tableau-inner" />
    </div>
  );
};

export default TableauViz;
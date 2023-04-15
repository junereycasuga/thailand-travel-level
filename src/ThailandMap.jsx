import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
  if (!visible) return null;

  const tooltipStyle = {
    top: position.y,
    left: position.x
  };

  return (
    <span style={tooltipStyle} className='map-tooltip'>
      {content}
    </span>
  );
};

const ThailandMapJSX = ({
  setSelectedProvince,
  setMenuPosition,
  setMenuVisible,
  setSelectedProvinceLayer,
  totalLevel
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");

  const handleProvinceClick = (event) => {
    const offsetY =
      event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0
        ? 0
        : event.target.getBoundingClientRect().y + 210 - window.innerHeight;
    const offsetX =
      event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0
        ? 0
        : event.target.getBoundingClientRect().x + 200 - window.innerWidth;
    setSelectedProvince(event.target.getAttribute("id"));
    setSelectedProvinceLayer(event.target);
    setMenuPosition({
      x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX,
      y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY
    });
    setMenuVisible(true);
  };

  const handleMouseEnter = (event) => {
    event.target.setAttribute("fill", "#CCCCCC");
    const targetElement = event.target.parentNode;
    const position = targetElement.getBoundingClientRect();
    setTooltipPosition({
      x: position.x + window.pageXOffset,
      y: position.y + window.pageYOffset
    });
    const tooltipContent = targetElement.getAttribute("id").replace(/_/g, " ");
    setTooltipContent(tooltipContent);
    setTooltipVisible(true);
  };

  const handleMouseLeave = (event) => {
    event.target.setAttribute("fill", "#fff");
    setTooltipVisible(false);
  };

  const handleOutsideClick = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <MapTooltip
        visible={tooltipVisible}
        position={tooltipPosition}
        content={tooltipContent}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        viewBox='0 0 840 1221'
        xmlSpace='preserve'
      >
        <g id='Background'>
          <path
            id='rect11351'
            fill='#9dc3fb'
            fillOpacity='1'
            strokeWidth='0.75'
            d='M-1.031 1.031H841.288V1223.7849999999999H-1.031z'
            onClick={(event) => handleOutsideClick(event)}
          ></path>
        </g>
        <g id='map' transform='scale(2.5) translate(-100, 0)'>
          <g id='Bangkok' className='province-layer'>
            <path
              d='M 234.011 220.177 L 244.847 220.315 L 243.024 228.064 L 238.536 227.517 L 237.826 231.385 L 232.666 231.082 L 230.612 231.095 L 230.548 234.334 L 229.165 234.605 L 226.795 227.017 L 226.731 224.913 L 232.519 224.504 L 233.391 223.338 L 234.011 220.177 Z'
              id='Bangkok'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Samut Prakan' className='province-layer'>
            <path
              d='M 230.548 234.334 L 230.612 231.095 L 232.666 231.082 L 237.861 231.451 L 238.536 227.517 L 243.202 228.179 L 246.115 229.244 L 242.835 235.06 L 230.548 234.334 Z'
              id='Samut Prakan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nonthaburi' className='province-layer'>
            <path
              d='M 227.208 214.931 L 227.778 218.822 L 234.011 220.177 L 233.391 223.338 L 232.519 224.504 L 226.754 224.86 L 225.205 214.605 L 227.208 214.931 Z'
              id='Nonthaburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Pathum Thani' className='province-layer'>
            <path
              d='M 242.068 210.848 L 244.149 209.874 L 244.209 210.834 L 246.018 209.916 L 245.848 211.064 L 244.866 211.596 L 244.861 219.855 L 244.847 220.315 L 234.011 220.177 L 227.778 218.822 L 227.208 214.931 L 231.337 215.056 L 233.529 215.024 L 242.068 210.848 Z'
              id='Pathum Thani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phra Nakhon Si Ayutthaya' className='province-layer'>
            <path
              d='M 232.334 197.174 L 235.21 197.789 L 244.108 209.958 L 233.529 215.024 L 231.337 215.056 L 227.208 214.931 L 225.205 214.605 L 225.334 213.19 L 224.177 213.057 L 224.043 211.927 L 223.89 203.362 L 229.211 202.387 L 229.487 204.476 L 232.022 203.971 L 232.334 197.174 Z'
              id='Phra Nakhon Si Ayutthaya'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Ang Thong' className='province-layer'>
            <path
              d='M 223.181 193.498 L 231.057 195.845 L 232.334 197.174 L 232.022 203.971 L 229.487 204.476 L 229.211 202.387 L 224.374 203.278 L 223.91 203.222 L 223.181 193.498 Z'
              id='Ang Thong'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Lop Buri' className='province-layer'>
            <path
              d='M 258.99 168.331 L 259.45 176.268 L 260.272 185.391 L 235.21 197.789 L 232.477 197.577 L 231.057 195.845 L 229.62 184.987 L 240.312 169.821 L 256.064 175.271 L 257.134 168.519 L 258.99 168.331 Z'
              id='Lop Buri'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Sing Buri' className='province-layer'>
            <path
              d='M 227.163 183.269 L 229.62 184.987 L 231.057 195.845 L 223.19 193.545 L 222.798 188.262 L 227.163 183.269 Z'
              id='Sing Buri'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chai Nat' className='province-layer'>
            <path
              d='M 220.089 173.34 L 227.163 183.269 L 222.798 188.262 L 207.751 187.527 L 207.999 187.416 L 207.907 177.94 L 220.089 173.34 Z'
              id='Chai Nat'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Saraburi' className='province-layer'>
            <path
              d='M 235.21 197.789 L 260.272 185.391 L 261.586 191.119 L 253.722 194.431 L 254.989 203.361 L 245.83 209.442 L 246.018 209.916 L 244.209 210.834 L 244.149 209.874 L 235.21 197.789 Z'
              id='Saraburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chon Buri' className='province-layer'>
            <path
              d='M 246.583 235.491 L 252.178 231.275 L 269.776 244.512 L 269.596 245.082 L 269.109 245.413 L 250.631 248.767 L 247.258 261.049 L 246.345 262.974 L 242.83 261.233 L 246.583 235.491 Z'
              id='Chon Buri'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Rayong' className='province-layer'>
            <path
              d='M 247.25 261.049 L 250.621 248.767 L 269.101 245.413 L 271.787 259.878 L 247.25 261.049 Z'
              id='Rayong'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chanthaburi' className='province-layer'>
            <path
              d='M 294.984 257.636 L 286.307 272.064 L 271.783 259.873 L 269.096 245.409 L 269.761 244.509 L 289.43 240.793 L 294.984 257.636 Z'
              id='Chanthaburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Trat' className='province-layer'>
            <path
              d='M 295.412 289.235 L 297.042 291.857 L 296.785 295.49 L 294.727 294.103 L 295.412 289.235 Z M 293.036 286.906 L 294.281 287.186 L 293.523 288.32 L 292.182 287.622 L 293.036 286.906 Z M 286.156 277.42 L 288.48 277.438 L 292.264 282.454 L 291.921 283.231 L 290.267 281.696 L 290.11 282.85 L 288.062 282.753 L 286.156 277.42 Z M 286.388 272.063 L 294.958 257.708 L 294.102 259.295 L 302.747 269.119 L 300.23 276.286 L 301.217 278.302 L 306.803 289.581 L 306.601 292.734 L 295.949 275.629 L 296.477 280.346 L 286.388 272.063 Z'
              id='Trat'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chachoengsao' className='province-layer'>
            <path
              d='M 244.861 219.855 L 251.769 219.557 L 253.74 222.451 L 275.803 230.994 L 274.167 233.199 L 279.044 242.638 L 270.469 244.352 L 269.776 244.512 L 252.173 231.265 L 246.818 235.331 L 242.835 235.06 L 246.115 229.244 L 243.202 228.179 L 243.024 228.064 L 244.847 220.315 L 244.861 219.855 Z'
              id='Chachoengsao'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Prachin Buri' className='province-layer'>
            <path
              d='M 260.91 206.218 L 261.03 204.44 L 281.788 213.802 L 275.756 231.054 L 253.74 222.451 L 251.769 219.557 L 251.926 219.428 L 262.931 210.113 L 260.91 206.218 Z'
              id='Prachin Buri'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Nayok' className='province-layer'>
            <path
              d='M 245.83 209.442 L 255.086 203.052 L 261.027 204.468 L 260.91 206.218 L 262.931 210.113 L 251.926 219.428 L 251.769 219.557 L 244.861 219.855 L 244.866 211.596 L 245.848 211.064 L 246.018 209.916 L 245.83 209.442 Z'
              id='Nakhon Nayok'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Sa Kaeo' className='province-layer'>
            <path
              d='M 281.788 213.802 L 307.276 212.993 L 289.628 240.314 L 289.435 240.788 L 279.055 242.699 L 274.167 233.199 L 275.756 231.054 L 281.788 213.802 Z'
              id='Sa Kaeo'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Ratchasima' className='province-layer'>
            <path
              d='M 259.45 176.268 L 279.537 171.703 L 288.627 161.17 L 302.637 166.218 L 309.214 175.708 L 292.122 193.186 L 299.752 209.121 L 291.861 213.76 L 281.788 213.802 L 261.03 204.44 L 255.086 203.052 L 253.722 194.431 L 261.586 191.119 L 260.272 185.391 L 259.45 176.268 Z'
              id='Nakhon Ratchasima'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Buri Ram' className='province-layer'>
            <path
              d='M 307.322 161.422 L 312.949 171.478 L 312.278 173.489 L 324.075 176.053 L 316.495 208.216 L 316.256 208.335 L 307.276 212.993 L 291.861 213.76 L 299.752 209.121 L 292.122 193.186 L 309.214 175.708 L 302.637 166.218 L 307.322 161.422 Z'
              id='Buri Ram'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Surin' className='province-layer'>
            <path
              d='M 312.949 171.478 L 340.05 173.834 L 342.195 207.642 L 316.495 208.216 L 324.075 176.053 L 312.278 173.489 L 312.949 171.478 Z'
              id='Surin'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Si Sa Ket' className='province-layer'>
            <path
              d='M 340.05 173.834 L 344.225 168.846 L 352.971 177.573 L 363.219 181.546 L 366.692 205.115 L 342.195 207.642 L 340.05 173.834 Z'
              id='Si Sa Ket'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Ubon Ratchathani' className='province-layer'>
            <path
              d='M 373.274 151.772 L 384.156 154.418 L 384.832 162.723 L 390.012 163.821 L 388.878 174.087 L 386.136 181.083 L 386.499 202.731 L 366.692 205.115 L 363.219 181.546 L 352.971 177.573 L 356.232 168.855 L 357.381 169.521 L 359.742 164.854 L 367.587 168.873 L 372.658 151.928 L 373.274 151.772 Z'
              id='Ubon Ratchathani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Yasothon' className='province-layer'>
            <path
              d='M 351.304 144.478 L 364.211 148.63 L 365.961 149.912 L 365.727 151.744 L 357.822 151.744 L 355.35 168.157 L 356.232 168.855 L 352.971 177.573 L 344.225 168.846 L 346.178 167.367 L 340.349 160.83 L 351.304 144.478 Z'
              id='Yasothon'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chaiyaphum' className='province-layer'>
            <path
              d='M 258.99 168.331 L 264.681 131.46 L 270.878 133.978 L 292.711 142.323 L 291.324 146.893 L 287.194 152.447 L 288.627 161.17 L 279.537 171.703 L 259.45 176.268 L 258.99 168.331 Z'
              id='Chaiyaphum'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Amnat Charoen' className='province-layer'>
            <path
              d='M 364.211 148.63 L 370.729 145.943 L 373.274 151.772 L 372.658 151.928 L 367.587 168.873 L 359.742 164.854 L 357.381 169.521 L 356.232 168.855 L 355.35 168.157 L 357.822 151.744 L 359.081 151.524 L 365.727 151.744 L 365.961 149.912 L 364.211 148.63 Z'
              id='Amnat Charoen'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Bueng Kan' className='province-layer'>
            <path
              d='M 321.302 91.175 L 318.567 80.818 L 318.76 80.505 L 340.114 80.156 L 346.297 89.807 L 340.826 96.012 L 340.463 96.761 L 340.441 97.377 L 321.302 91.175 Z'
              id='Bueng Kan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nong Bua Lam Phu' className='province-layer'>
            <path
              d='M 281.126 102.301 L 288.342 100.923 L 292.122 113.747 L 295.612 113.075 L 296.242 115.393 L 293.143 116.329 L 299.206 123.022 L 297.446 130.262 L 280.648 126.302 L 281.126 102.301 Z'
              id='Nong Bua Lam Phu'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Khon Kaen' className='province-layer'>
            <path
              d='M 299.206 123.022 L 312.54 125.58 L 314.194 134.243 L 304.718 146.182 L 307.322 161.422 L 302.637 166.218 L 288.627 161.17 L 287.194 152.447 L 291.324 146.893 L 292.711 142.323 L 270.887 133.905 L 271.857 130.427 L 280.648 126.302 L 297.446 130.262 L 299.206 123.022 Z'
              id='Khon Kaen'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Udon Thani' className='province-layer'>
            <path
              d='M 280.234 87.786 L 297.519 100.657 L 300.63 103.298 L 305.485 94.235 L 321.874 93.62 L 317.248 112.705 L 329.981 122.176 L 322.572 128.498 L 312.54 125.58 L 299.206 123.022 L 293.143 116.329 L 296.242 115.393 L 295.616 113.075 L 292.122 113.747 L 288.342 100.923 L 281.126 102.301 L 280.234 87.786 Z'
              id='Udon Thani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Loei' className='province-layer'>
            <path
              d='M 281.516 83.527 L 281.806 83.624 L 280.234 87.786 L 281.126 102.301 L 280.648 126.302 L 271.857 130.427 L 267.631 121.497 L 253.735 119.844 L 249.656 125.865 L 245.415 104.472 L 252.633 107.699 L 279.922 84.129 L 281.053 83.468 L 281.516 83.527 Z'
              id='Loei'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nong Khai' className='province-layer'>
            <path
              d='M 318.567 80.818 L 321.874 93.62 L 305.485 94.235 L 300.63 103.298 L 297.519 100.657 L 280.234 87.786 L 281.806 83.624 L 299.738 94.777 L 318.567 80.818 Z'
              id='Nong Khai'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Maha Sarkham' className='province-layer'>
            <path
              d='M 314.194 134.243 L 324.308 148.23 L 324.763 148.419 L 325.057 148.502 L 321.809 172.952 L 312.949 171.478 L 307.322 161.422 L 304.718 146.182 L 314.194 134.243 Z'
              id='Maha Sarakham'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Roi Et' className='province-layer'>
            <path
              d='M 347.803 141.138 L 350.422 144.284 L 351.304 144.478 L 340.349 160.83 L 346.178 167.367 L 344.225 168.846 L 340.05 173.834 L 321.809 172.952 L 325.057 148.502 L 332.82 146.343 L 331.112 142.805 L 334.754 139.871 L 347.803 141.138 Z'
              id='Roi Et'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Kalasin' className='province-layer'>
            <path
              d='M 312.54 125.58 L 322.572 128.498 L 329.981 122.176 L 342.47 128.038 L 342.636 128.53 L 347.803 141.138 L 334.754 139.871 L 331.112 142.805 L 332.82 146.343 L 325.057 148.502 L 324.308 148.23 L 314.194 134.243 L 312.54 125.58 Z'
              id='Kalasin'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Sakon Nakhon' className='province-layer'>
            <path
              d='M 321.315 91.107 L 340.441 97.377 L 340.758 97.221 L 340.955 107.956 L 353.246 108.948 L 353.357 109.136 L 348.268 125.801 L 342.47 128.038 L 329.981 122.176 L 317.248 112.705 L 321.874 93.62 L 321.524 91.883 L 321.315 91.107 Z'
              id='Sakon Nakhon'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Phanom' className='province-layer'>
            <path
              d='M 346.164 89.66 L 364.965 109.954 L 363.132 129.048 L 348.268 125.801 L 353.246 108.948 L 340.955 107.956 L 340.758 97.221 L 340.826 96.012 L 346.164 89.66 Z'
              id='Nakhon Phanom'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Mukdahan' className='province-layer'>
            <path
              d='M 348.268 125.801 L 363.132 129.048 L 370.729 145.943 L 364.211 148.63 L 351.304 144.478 L 350.422 144.284 L 347.803 141.138 L 342.464 128.075 L 348.268 125.801 Z'
              id='Mukdahan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chiang Mai' className='province-layer'>
            <path
              d='M 201.532 20.658 L 203.153 21.388 L 193.87 38.191 L 198.013 58.095 L 195.413 73.261 L 190.424 67.506 L 176.538 76.261 L 181.605 95.365 L 169.938 96.541 L 172.524 113.22 L 166.92 112.925 L 163.81 104.24 L 158.887 105.36 L 157.44 102.255 L 159.112 100.804 L 154.959 92.976 L 162.184 90.877 L 157.168 77.005 L 162.46 52.848 L 174.219 56.05 L 174.798 55.099 L 169.161 36.505 L 169.134 35.554 L 170.448 34.672 L 187.98 22.133 L 201.532 20.658 Z'
              id='Chiang Mai'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Lamphun' className='province-layer'>
            <path
              d='M 176.33 95.918 L 181.605 95.365 L 176.538 76.261 L 190.424 67.506 L 195.413 73.261 L 186.161 82.333 L 191.261 95.03 L 187.15 103.031 L 182.827 105.517 L 176.001 109.109 L 176.33 95.918 Z'
              id='Lamphun'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Lop Buri' className='province-layer'>
            <path
              d='M 198.013 58.095 L 199.11 57.818 L 202.307 55.297 L 203.056 44.506 L 207.08 45.595 L 211.558 58.03 L 220.102 64.295 L 198.646 95.365 L 196.952 97.841 L 200.213 98.985 L 199.703 114.607 L 195.353 114.129 L 182.827 105.517 L 187.15 103.031 L 191.261 95.03 L 186.161 82.333 L 195.413 73.261 L 198.013 58.095 Z'
              id='Lampang'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Uttaradit' className='province-layer'>
            <path
              d='M 250.231 78.209 L 253.161 79.541 L 253.235 88.41 L 246.808 99.725 L 215.923 117.211 L 214.609 97.547 L 229.39 89.816 L 240.405 89.702 L 250.231 78.209 Z'
              id='Uttaradit'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phrae' className='province-layer'>
            <path
              d='M 220.102 64.295 L 227.276 64.112 L 228.545 73.914 L 233.318 74.653 L 232.569 77.846 L 229.39 89.816 L 214.609 97.547 L 200.213 98.985 L 196.952 97.841 L 198.646 95.365 L 220.102 64.295 Z'
              id='Phrae'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nan' className='province-layer'>
            <path
              d='M 230.024 32.026 L 256.239 39.086 L 258.55 56.593 L 250.231 78.209 L 240.405 89.702 L 229.39 89.816 L 233.318 74.653 L 228.545 73.914 L 227.254 64.135 L 236.607 54.209 L 230.235 34.893 L 229.165 34.07 L 230.024 32.026 Z'
              id='Nan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phayao' className='province-layer'>
            <path
              d='M 229.165 34.07 L 230.235 34.893 L 236.607 54.209 L 227.254 64.135 L 227.034 64.143 L 220.102 64.295 L 211.558 58.03 L 207.08 45.595 L 229.165 34.07 Z'
              id='Phayao'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chiang Rai' className='province-layer'>
            <path
              d='M 199.777 12.551 L 227.576 13.037 L 232.936 20.713 L 230.024 32.026 L 229.165 34.07 L 207.08 45.595 L 203.056 44.506 L 202.307 55.297 L 199.11 57.818 L 198.013 58.095 L 193.87 38.191 L 203.153 21.388 L 201.532 20.658 L 199.777 12.551 Z'
              id='Chiang Rai'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Mae Hong Son' className='province-layer'>
            <path
              d='M 134.422 72.885 L 150.361 39.33 L 167.489 35.536 L 168.913 35.37 L 169.13 35.559 L 169.161 36.51 L 174.798 55.099 L 174.219 56.05 L 162.464 52.848 L 157.168 77.01 L 162.184 90.891 L 154.959 92.99 L 159.107 100.817 L 157.44 102.269 L 153.664 94.768 L 146.745 97.561 L 134.422 72.885 Z'
              id='Mae Hong Son'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Sawan' className='province-layer'>
            <path
              d='M 217.59 148.598 L 217.962 148.74 L 218.173 149.177 L 218.968 150.831 L 222.508 156.994 L 240.405 154.882 L 240.364 169.792 L 240.079 170.132 L 229.62 184.987 L 227.163 183.269 L 214.421 165.253 L 201.476 168.851 L 189.777 161.474 L 189.067 157.661 L 208.559 159.407 L 217.59 148.598 Z'
              id='Nakhon Sawan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Uthai Thani' className='province-layer'>
            <path
              d='M 189.777 161.474 L 201.476 168.851 L 214.421 165.253 L 220.051 173.433 L 207.907 177.94 L 207.999 187.416 L 207.751 187.527 L 207.632 187.389 L 205.114 188.73 L 195.932 184.187 L 194.388 186.976 L 185.073 181.009 L 189.777 161.474 Z'
              id='Uthai Thani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Kamphaeng Phet' className='province-layer'>
            <path
              d='M 198.78 126.628 L 212.11 131.262 L 217.053 136.242 L 217.59 148.598 L 208.559 159.407 L 188.938 157.54 L 185.156 139.196 L 198.78 126.628 Z'
              id='Kamphaeng Phet'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Tak' className='province-layer'>
            <path
              d='M 146.741 97.566 L 153.664 94.772 L 157.44 102.255 L 158.887 105.36 L 163.81 104.24 L 166.92 112.925 L 172.524 113.22 L 169.938 96.541 L 176.377 95.894 L 176.001 109.109 L 182.827 105.517 L 195.353 114.129 L 198.78 126.628 L 185.156 139.196 L 189.777 161.474 L 185.073 181.009 L 172.294 165.915 L 181.311 149.416 L 146.741 97.566 Z'
              id='Tak'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Sukhothai' className='province-layer'>
            <path
              d='M 200.213 98.985 L 214.652 97.518 L 215.923 117.211 L 219.822 123.803 L 212.11 131.262 L 198.78 126.628 L 195.353 114.129 L 199.703 114.607 L 200.213 98.985 Z'
              id='Sukhothai'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phitsanulok' className='province-layer'>
            <path
              d='M 246.808 99.715 L 245.449 104.483 L 249.656 125.861 L 235.467 144.964 L 234.769 135.824 L 217.636 136.177 L 216.768 136.108 L 212.115 131.249 L 219.827 123.798 L 215.931 117.211 L 246.808 99.715 Z'
              id='Phitsanulok'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phichit' className='province-layer'>
            <path
              d='M 217.59 148.598 L 216.94 136.205 L 234.773 135.828 L 235.467 144.974 L 240.148 154.459 L 240.405 154.882 L 222.326 156.967 L 217.59 148.598 Z'
              id='Phichit'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phetchabun' className='province-layer'>
            <path
              d='M 249.656 125.865 L 253.735 119.844 L 267.631 121.497 L 271.857 130.427 L 270.871 133.874 L 264.681 131.46 L 258.99 168.331 L 257.134 168.519 L 256.064 175.271 L 240.364 169.792 L 240.148 154.459 L 235.649 144.824 L 249.656 125.865 Z'
              id='Phetchabun'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Ratchaburi' className='province-layer'>
            <path
              d='M 212.735 220.186 L 213.911 221.551 L 218.595 229.644 L 217.457 234.178 L 213.882 234.058 L 212.096 239.832 L 192.088 243.672 L 190.755 227.209 L 210.424 224.651 L 212.735 220.186 Z'
              id='Ratchaburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Kanchanaburi' className='province-layer'>
            <path
              d='M 172.294 165.915 L 185.073 181.009 L 194.388 186.976 L 208.991 194.987 L 209.579 196.13 L 211.692 216.695 L 212.735 220.186 L 210.424 224.651 L 190.755 227.209 L 160.277 183.187 L 172.294 165.915 Z'
              id='Kanchanaburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Suphan Buri' className='province-layer'>
            <path
              d='M 194.388 186.976 L 195.932 184.187 L 205.114 188.73 L 207.632 187.389 L 207.751 187.527 L 222.798 188.262 L 223.91 203.222 L 224.043 211.927 L 211.692 216.695 L 209.579 196.13 L 208.991 194.987 L 194.388 186.976 Z'
              id='Suphan Buri'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Pathom' className='province-layer'>
            <path
              d='M 224.043 211.927 L 224.177 213.057 L 225.334 213.19 L 225.205 214.605 L 226.731 224.913 L 226.795 227.017 L 218.595 229.644 L 212.735 220.186 L 211.692 216.695 L 224.043 211.927 Z'
              id='Nakhon Pathom'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Samut Sakhon' className='province-layer'>
            <path
              d='M 226.795 227.017 L 229.165 234.605 L 218.977 236.759 L 217.457 234.178 L 218.595 229.644 L 226.795 227.017 Z'
              id='Samut Sakhon'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Samut Songkhram' className='province-layer'>
            <path
              d='M 212.096 239.832 L 213.882 234.058 L 217.457 234.178 L 218.977 236.759 L 215.059 240.856 L 212.183 242.45 L 212.096 239.832 Z'
              id='Samut Songkhram'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phetchaburi' className='province-layer'>
            <path
              d='M 192.088 243.672 L 212.096 239.832 L 212.183 242.45 L 215.059 240.856 L 219.445 248.937 L 215.137 261.784 L 199.166 263.364 L 192.818 257.99 L 189.175 244.642 L 192.088 243.672 Z'
              id='Phetchaburi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Prachuap Khiri Khan' className='province-layer'>
            <path
              d='M 199.166 263.364 L 215.132 261.784 L 215.178 263.461 L 217.085 275.734 L 201.104 313.345 L 190.199 312.068 L 206.097 287.249 L 199.166 263.364 Z'
              id='Prachuap Khiri Khan'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Nakhon Si Thammarat' className='province-layer'>
            <path
              d='M 209.399 365.498 L 226.924 408.782 L 220.961 410.721 L 209.786 411.111 L 208.344 411.147 L 208.137 406.748 L 197.856 408.033 L 194.315 396.816 L 209.399 365.498 Z'
              id='Nakhon Si Thammarat'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Krabi' className='province-layer'>
            <path
              d='M 176.36 387.027 L 177.732 385.71 L 194.388 396.869 L 197.861 408.052 L 193.593 417.239 L 189.307 415.724 L 187.088 424.129 L 180.84 408.124 L 174.26 395.204 L 174.633 393.941 L 176.36 387.027 Z'
              id='Krabi'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phangnga' className='province-layer'>
            <path
              d='M 171.095 403.495 L 173.116 404.124 L 173.484 405.314 L 173.594 407.813 L 173.057 410.155 L 172.046 410.122 L 170.82 403.918 L 171.095 403.495 Z M 174.279 400.886 L 173.925 403.537 L 173.728 403.652 L 172.74 403.66 L 171.996 402.967 L 172.838 402.51 L 173.828 401.006 L 174.279 400.886 Z M 166.741 364.754 L 170.25 365.958 L 176.378 387.027 L 174.526 393.826 L 174.334 394.873 L 168.289 396.706 L 168.12 401.871 L 166.32 402.109 L 163.346 400.312 L 160.976 389.499 L 166.741 364.754 Z'
              id='Phangnga'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phuket' className='province-layer'>
            <path
              d='M 163.668 400.473 L 165.042 401.331 L 165.537 403.201 L 168.256 409.333 L 164.927 413.243 L 163.42 413.256 L 163.388 400.569 L 163.668 400.473 Z'
              id='Phuket'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Surat Thani' className='province-layer'>
            <path
              d='M 218.679 357.194 L 218.793 360.91 L 217.742 361.488 L 216.813 362.499 L 214.554 362.192 L 213.984 360.248 L 213.796 357.767 L 215.936 357.249 L 218.54 357.139 L 218.679 357.194 Z M 177.462 356.835 L 190.479 353.643 L 195.05 363.216 L 192.321 365.058 L 193.81 368.732 L 209.386 365.503 L 194.302 396.821 L 177.714 385.695 L 176.341 387.014 L 168.348 378.81 L 170.213 365.944 L 177.462 356.835 Z M 217.071 350.46 L 217.82 353.891 L 216.184 353.358 L 215.656 352.913 L 215.389 350.46 L 217.071 350.46 Z'
              id='Surat Thani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Ranong' className='province-layer'>
            <path
              d='M 179.497 322.371 L 182.124 320.18 C 181.85 325.186 180.48 342.334 180.48 342.334 L 182.565 342.692 L 174.183 350.997 L 177.471 356.844 L 170.268 365.976 L 166.759 364.773 L 179.497 322.371 Z'
              id='Ranong'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Chumphon' className='province-layer'>
            <path
              d='M 190.232 312.081 L 200.93 313.473 L 190.507 353.643 L 177.489 356.835 L 174.201 350.988 L 182.583 342.683 L 180.498 342.325 L 182.143 320.17 L 190.232 312.081 Z'
              id='Chumphon'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Songkhla' className='province-layer'>
            <path
              d='M 229.192 427.003 L 235.336 433.648 L 249.412 442.144 L 250.804 449.218 L 242.601 459.176 L 222.858 446.205 L 218.265 434.39 L 229.192 427.003 Z'
              id='Songkhla'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Satun' className='province-layer'>
            <path
              d='M 194.127 450.78 L 195.339 451.193 L 195.647 451.579 L 195.587 452.424 L 195.262 452.892 L 194.357 452.92 L 194.058 451.515 L 194.127 450.78 Z M 193.193 450.268 L 193.502 450.862 L 193.538 451.441 L 192.055 452.061 L 191.312 450.698 L 193.193 450.268 Z M 205.61 445.764 L 207.569 451.948 L 205.89 453.099 L 203.998 450.072 L 205.385 447.638 L 205.454 445.814 L 205.61 445.764 Z M 208.399 433.679 L 216.46 434.184 L 218.265 434.372 L 222.858 446.186 L 220.364 456.117 L 207.14 442.139 L 206.304 436.453 L 208.399 433.679 Z'
              id='Satun'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Trang' className='province-layer'>
            <path
              d='M 197.852 408.043 L 208.132 406.756 L 208.214 411.377 L 216.433 434.192 L 208.1 433.674 L 197.933 428.404 L 193.548 417.239 L 197.852 408.043 Z'
              id='Trang'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Phatthalung' className='province-layer'>
            <path
              d='M 208.352 411.157 L 221.19 410.83 L 226.88 408.95 L 229.213 426.823 L 218.564 434.322 L 216.465 434.197 L 208.247 411.382 L 208.352 411.157 Z'
              id='Phatthalung'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Pattani' className='province-layer'>
            <path
              d='M 249.427 442.139 L 264.732 442.47 L 269.931 450.817 L 265.839 451.165 L 250.819 449.204 L 249.427 442.139 Z'
              id='Pattani'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Yala' className='province-layer'>
            <path
              d='M 250.819 449.204 L 265.839 451.165 L 258.981 462.235 L 262.977 471.978 L 252.872 479.47 L 251.641 480.531 L 250.938 460.963 L 243.162 461.234 L 242.615 459.167 L 250.819 449.204 Z'
              id='Yala'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
          <g id='Narathiwat' className='province-layer'>
            <path
              d='M 265.839 451.165 L 269.931 450.817 L 281.112 461.036 L 272.959 476.756 L 262.977 471.978 L 258.981 462.235 L 265.839 451.165 Z'
              id='Narathiwat'
              fill='#fff'
              fillRule='nonzero'
              stroke='#000'
              strokeDasharray='none'
              strokeDashoffset='0'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='4'
              strokeWidth='1'
              opacity='1'
              vectorEffect='non-scaling-stroke'
              onClick={(event) => handleProvinceClick(event)}
              onMouseEnter={(event) => handleMouseEnter(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
            ></path>
          </g>
        </g>
        <g
          id='g1953'
          strokeDasharray='none'
          strokeDashoffset='0'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeOpacity='1'
          paintOrder='markers fill stroke'
          transform='matrix(1.63481 0 0 1.6089 -381.296 600)'
        >
          <rect
            id='rect385'
            width='176.299'
            height='132.998'
            x='544.363'
            y='159.803'
            fill='#fff'
            stroke='#000'
            strokeWidth='1.5'
            display='inline'
            ry='6.754'
          ></rect>
          <rect
            id='rect1963'
            width='25.835'
            height='17.926'
            x='530.263'
            y='145.262'
            fill='#e84c3d'
            fillOpacity='1'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <rect
            id='rect1963-1'
            width='25.835'
            height='17.926'
            x='530.263'
            y='175.262'
            fill='#d58337'
            fillOpacity='1'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <rect
            id='rect1963-1-2'
            width='25.835'
            height='17.926'
            x='530.263'
            y='205.262'
            fill='#f3c218'
            fillOpacity='1'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <rect
            id='rect1963-3'
            width='25.835'
            height='17.926'
            x='530.676'
            y='235.262'
            fill='#30cc70'
            fillOpacity='1'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <rect
            id='rect1963-1-8'
            width='25.835'
            height='17.926'
            x='530.676'
            y='265.263'
            fill='#3598db'
            fillOpacity='1'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <rect
            id='rect1963-1-2-1'
            width='25.835'
            height='17.926'
            x='530.676'
            y='295.263'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            ry='4.118'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
          ></rect>
          <text
            id='text2045-3-8'
            x='723.828'
            y='189.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-6'
              x='723.828'
              y='189.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 4
            </tspan>
          </text>
          <text
            id='text2045-3-8-4'
            x='723.828'
            y='159.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-6-1'
              x='723.828'
              y='159.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 5
            </tspan>
          </text>
          <text
            id='text2045-3-7'
            x='723.828'
            y='219.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-1'
              x='723.828'
              y='219.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 3
            </tspan>
          </text>
          <text
            id='text2045-3-84'
            x='723.828'
            y='249.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-9'
              x='723.828'
              y='249.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 2
            </tspan>
          </text>
          <text
            id='text2045-3-73'
            x='723.828'
            y='279.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-10'
              x='723.828'
              y='279.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 1
            </tspan>
          </text>
          <text
            id='text2045-3-2'
            x='723.828'
            y='309.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-4-3'
              x='723.828'
              y='309.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Level: 0
            </tspan>
          </text>
          <text
            id='text2045-5'
            x='569.215'
            y='189.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-8'
              x='569.215'
              y='189.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Stayed there
            </tspan>
          </text>
          <text
            id='text2045-5-9'
            x='569.215'
            y='159.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-8-2'
              x='569.215'
              y='159.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Lived there
            </tspan>
          </text>
          <text
            id='text2045-2'
            x='569.848'
            y='219.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-9'
              x='569.848'
              y='219.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Visited there
            </tspan>
          </text>
          <text
            id='text2045-8'
            x='569.848'
            y='249.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-2'
              x='569.848'
              y='249.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Alighted there
            </tspan>
          </text>
          <text
            id='text2045-0'
            x='568.828'
            y='279.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-7'
              x='568.828'
              y='279.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Passed there
            </tspan>
          </text>
          <text
            id='text2045-4'
            x='568.828'
            y='309.117'
            fill='#fff'
            stroke='#000'
            strokeWidth='0.525'
            fontSize='16'
            transform='matrix(.6117 0 0 .62154 230.623 86.575)'
            xmlSpace='preserve'
          >
            <tspan
              id='tspan2047-85'
              x='568.828'
              y='309.117'
              fill='#000'
              fillOpacity='1'
              stroke='none'
              strokeDasharray='none'
              strokeWidth='0.75'
              fontSize='16'
            >
              Never been there
            </tspan>
          </text>
          <text
            xmlSpace='preserve'
            style={{ WebkitTextAlign: "center", textAlign: "center" }}
            id='text3282'
            x='637.208'
            y='147.041'
            fill='#000'
            fillOpacity='1'
            stroke='none'
            strokeWidth='0.462'
            fontSize='20'
            textAnchor='middle'
            transform='scale(.99204 1.00802)'
          >
            <tspan
              id='tspan3280'
              style={{ WebkitTextAlign: "center", textAlign: "center" }}
              x='637.208'
              y='147.041'
              strokeWidth='0.462'
              textAnchor='middle'
            >
              Thailand Level {totalLevel}
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};

export default ThailandMapJSX;

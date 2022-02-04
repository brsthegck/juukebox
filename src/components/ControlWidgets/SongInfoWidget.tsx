import React from 'react'
import { Link } from "react-router-dom";

import LikeSVG from "../../img/PlayerControlBar/Like.svg";
import AddSVG from "../../img/PlayerControlBar/Add.svg";

const SongInfoWidget = () => {
	return (
		<div className="flex flex-row items-center m-2 w-trackinfo truncate">
			<Link to="album/albumid">
				<img className="rounded-md w-12 h-12" src="https://upload.wikimedia.org/wikipedia/tr/d/db/Museoriginofsymemtryalbumkapak.jpg"/>
			</Link>

			<div className="flex flex-col justify-center m-3">
				<Link className="text-sm truncate" to="album/albumid">TrackNameTrackName</Link>
				<Link className="text-xs text-zinc-500 truncate" to="artist/artistid">ArtistName</Link>
			</div>

			<div className="flex flex-row">
				<img className="m-1" src={LikeSVG}/>
				<img  className="m-1" src={AddSVG}/>
			</div>
		</div>
	);
}

export default SongInfoWidget
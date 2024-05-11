import Genius from "genius-lyrics";

const geniusAuthToken = import.meta.env.GENIUS_PERSONAL_ACCESS_TOKEN || "";
const Client = new Genius.Client(geniusAuthToken);
const fallBack = ["I guess it's okay for now"];

export async function getLyrics(): Promise<string[]> {
	try {
		const searches = await Client.songs.search("Lil Skies - Ok 4 Now");
		const firstSong = searches[0];
		const lyrics = await firstSong.lyrics(true);
		return lyrics
			.split("\n")
			.filter((line) => line.trim() !== "")
			.map((line) => line.replace(/[()]/g, ""))
			.map((line) => `"${line}"`);
	} catch (err) {
		return fallBack;
	}
}

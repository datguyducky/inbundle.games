import Dexie from 'dexie';

const db = new Dexie('testing');
db.version(1).stores({
	games: '++id, name',
	bundles: '++id'
})



/*db.bundles.add(
	{
		name: 'Humble Indie Bundle',
		date_start: '1270598400000',
		date_end: '1270857600000'
	},
)*/

/*db.open().catch(function (e) {
    console.error("Open failed: " + e);
})*/
export default db;
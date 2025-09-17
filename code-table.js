var SPREADSHEET_ID_AND_TAB = '1rDW8h922THjQ84FpnXxDHKbszoAboV1zvzc0KyHeMhE/MS articles - Claude';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let main = $(
					`<details>
						<summary>` + entry.Article + `</summary>
						<div>
						<p>` + entry.URL + `</p>
	<p>` + entry.Peopleinvolved + `</p>
</div
		
					</details>`
				).appendTo('#table');
			});
		}
	);
});

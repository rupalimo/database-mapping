var SPREADSHEET_ID_AND_TAB = '1rDW8h922THjQ84FpnXxDHKbszoAboV1zvzc0KyHeMhE/1';

var searchInput = document.querySelector('[data-search]');

searchInput.addEventListener("input", (e) => {
	const value = e.target.value
	console.log(value)
})

$(document).ready(function () {
			// var searchInput = document.querySelector('[data-search]');


	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				// if (index == 0) return;

				let div = $(
					`<a data-confirm="` +
						entry['PeopleIndex'] +
						`" class="` +
						entry['PeopleIndex'] +
						`">
						` +
						entry['PeopleIndex'] +
						`</a><a data-confirm="` +
						entry.InstitutionIndex +
						`" class="` +
						entry.InstitutionIndex +
						`">
						` +
						entry.InstitutionIndex +
						`</a>`
				).appendTo('#dateset');
			});

		}
	);
});

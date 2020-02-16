$.ajaxSetup({async: false})

baca = [
	'I think, you can love it',
	'I was explain this',
	'Wow. It\'s crazy',
	"It's very cool",
	"Wow. I'll try this"
]

kosong = () => baca[Math.floor(Math.random() *  baca.length)]

olah_isi = () => {
	$.get('https://dev.to/api/articles?per_page=1', data => banyak = data[0].id)

	mau_diambil = 20

	list_artikel_acak = [];
	while(list_artikel_acak.length < mau_diambil){
	    r = Math.floor(Math.random() * banyak) + 1;
	    if(list_artikel_acak.indexOf(r) === -1) list_artikel_acak.push(r);
	}

	isi_artikel = []
	for(y of list_artikel_acak){
		$.get(`https://dev.to/api/articles/${y}`, data => isi_artikel.push(data))
	}	

	$('.isi').html(isi_artikel.map(x => `
		<a href="${x.url}" class="anggap-aja-bukan-link" target='_blank'>
			<table class="table table-ajaib">
				<tr>
					<td>
						<img src="${x.user.profile_image_90}" alt="">
					</td>
					<td>
						<div class="panel panel-default">
							<div class="panel-heading">${x.title} ~ <em>by ${x.user.name}</em></div>
							<div class="panel-body">${x.description ? x.description : kosong()}</div>
						</div>
					</td>
				</tr>
			</table>
		</a>`))
}

olah_isi()

$('.navbar-brand').click(() => {
	$('.isi').html('Loading...')
	olah_isi()
})
$.ajaxSetup({async: false})

$.get('https://dev.to/api/articles', data => banyak = data[0].id)

mau_diambil = 10

list_artikel_acak = [];
while(list_artikel_acak.length < mau_diambil){
    r = Math.floor(Math.random() * banyak) + 1;
    if(list_artikel_acak.indexOf(r) === -1) list_artikel_acak.push(r);
}

data_acak = []
for(x of list_artikel_acak){
	$.get(`https://dev.to/api/articles/${x}`, data => data_acak.push(data))
}

$('.isi').html(data_acak.map(x => `
	<a href="${x.url}" class="anggap-aja-bukan-link" target='_blank'>
		<table class="table table-ajaib">
			<tr>
				<td>
					<img src="${x.user.profile_image_90}" alt="">
				</td>
				<td>
					<div class="panel panel-default">
						<div class="panel-heading">${x.title} ~ <em>by ${x.user.name}</em></div>
						<div class="panel-body">${x.description}</div>
					</div>
				</td>
			</tr>
		</table>
	</a>`))
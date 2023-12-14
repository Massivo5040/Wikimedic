let numRegistroNow = ''
async function registerMedication() {
    const medicationData = {
        name: document.getElementById('name').value,
        numRegistro: document.getElementById('numRegistro').value,
        indicacao: document.getElementById('indicacao').value,
        contraindicacao: document.getElementById('contraindicacao').value,
        categoria: document.getElementById('categoria').value,
        cuidados: document.getElementById('cuidados').value,
        reacao_adversa: document.getElementById('reacao_adversa').value,
        posologia: document.getElementById('posologia').value,
        riscos: document.getElementById('riscos').value,
        especiais: document.getElementById('especiais').value,
        superdose: document.getElementById('superdose').value
    };

    const response = await fetch('https://server-wikimedic.onrender.com/medicamentos/validate', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(medicationData),
    });

    if (response.ok) {
        console.log('Sucesso');
        const json = await response.json()
        console.log(json)
        alert('Sucesso. ' + json.validacao_status)
        location.reload()
    } else {
        console.log('Algo deu errado');
    }
}
document.querySelector('#registrar').addEventListener('click', registerMedication)

async function updateMedic() {
    const medicationData = {
        numRegistro: document.getElementById('update-numRegistro').value,
        newMedic: {
            name: document.getElementById('update-name').value,
            numRegistro: document.getElementById('update-numRegistro').value,
            indicacao: document.getElementById('update-indicacao').value,
            contraindicacao: document.getElementById('update-contraindicacao').value,
            categoria: document.getElementById('update-categoria').value,
            cuidados: document.getElementById('update-cuidados').value,
            reacao_adversa: document.getElementById('update-reacao_adversa').value,
            posologia: document.getElementById('update-posologia').value,
            riscos: document.getElementById('update-riscos').value,
            especiais: document.getElementById('update-especiais').value,
        }
    };

    const response = await fetch('https://server-wikimedic.onrender.com/medicamentos/update', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(medicationData),
    });

    if (response.ok) {
        console.log('Sucesso');
        const json = await response.json()
        console.log(json)
        alert('Sucesso. ')
        document.querySelector('#medSelected').textContent = `Nenhum Medicamento Selecionado`
        document.querySelector('#update-name').value = ""
        document.querySelector('#update-numRegistro').value = ""
        document.querySelector('#update-categoria').value = "populares"
        document.querySelector('#update-indicacao').value = ""
        document.querySelector('#update-contraindicacao').value = ""
        document.querySelector('#update-reacao_adversa').value = ""
        document.querySelector('#update-posologia').value = ""
        document.querySelector('#update-riscos').value = ""
        document.querySelector('#update-especiais').value = ""
    } else {
        console.log('Algo deu errado');
        console.log(await response.json())
        alert('Algo deu Errado!!.')
    }
}
document.querySelector('#atualizar').addEventListener('click', updateMedic);

const loadTable = async () => {
    const response = await fetch('https://server-wikimedic.onrender.com/medicamentos');
    if (response.ok) {
        const json = await response.json()
        console.log(json)
        json.forEach(i => {
            const link = `https://massivo5040.github.io/Wikimedic/html/medic.html?numRegistro=${i.numRegistro}`
            let categoria = i.categoria.toUpperCase()

            const tr = document.createElement('tr')
            const tdName = document.createElement('td')
            tdName.textContent = i.name
            const tdCategoria = document.createElement('td')
            tdCategoria.textContent = categoria
            const tdNumRegistro = document.createElement('td')
            tdNumRegistro.textContent = i.numRegistro

            const tdLink = document.createElement('td')
            const a = document.createElement('a')
            a.href = link
            a.textContent = i.name
            tdLink.appendChild(a)

            const tdButton = document.createElement('td')
            const updateButton = document.createElement('span')
            tdButton.appendChild(updateButton)

            updateButton.classList.add('update-button')
            updateButton.classList.add('material-symbols-rounded')

            updateButton.innerHTML = "edit"
            updateButton.addEventListener('click', () => {
                document.querySelector('#medSelected').textContent = `Medicamento Selecionado: ${i.name}. Número Registro salvo: ${i.numRegistro}`
                document.querySelector('#update-name').value = i.name
                document.querySelector('#update-numRegistro').value = i.numRegistro
                document.querySelector('#update-categoria').value = i.categoria
                document.querySelector('#update-indicacao').value = i.indicacao
                document.querySelector('#update-contraindicacao').value = i.contraindicacao
                document.querySelector('#update-reacao_adversa').value = i.reacao_adversa
                document.querySelector('#update-posologia').value = i.posologia
                document.querySelector('#update-riscos').value = i.riscos
                document.querySelector('#update-especiais').value = i.especiais

                alert('Vá até o formulário de atualização')
            })

            const deleteButton = document.createElement('span')
            deleteButton.classList.add('material-symbols-rounded')
            deleteButton.classList.add('delete-button')
            deleteButton.innerHTML = 'delete_forever'

            deleteButton.addEventListener('click', async () => {
                const response = await fetch('https://server-wikimedic.onrender.com' + `/medicamentos/delete/numProcesso/${i.numRegistro}`,
                    {
                        method: "DELETE"
                    })

                if (response.ok) {
                    alert('Medicamento Deletado')
                    location.reload()
                }
                else {
                    alert('Erro ao deletar Medicamento')
                }
            })

            tdButton.appendChild(deleteButton)

            tr.appendChild(tdName)
            tr.appendChild(tdNumRegistro)
            tr.appendChild(tdCategoria)
            tr.appendChild(tdLink)
            tr.appendChild(tdButton)
            document.querySelector('#tableLoadMedic').appendChild(tr)
        });
    }
}

loadTable()
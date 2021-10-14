class InvitedPeople{
  
  constructor(params){
    this.invited = [
      {
        params: 'fam-flores-santana',
        name: 'Fam. Flores Santana',
        tickets: 3
      },
      {
        params: 'esteban-valverde-maya',
        name: 'Esteban Valverde Maya',
        tickets: 1
      },
      {
        params: 'fam-nuñez-flores',
        name: 'Fam. Nuñez Flores',
        tickets: 2
      },
      {
        params: 'alberto-y-bibiana-alvarez',
        name: 'Alberto y bibiana Alvarez',
        tickets: 2
      },
      {
        params: 'luis-y-lidia-monsalvo',
        name: 'Luis y lidia Monsalvo',
        tickets: 2
      },
      {
        params: 'fam-hernandez',
        name: 'Fam. Hernandez',
        tickets: 3
      },
      {
        params: 'victoria-y-martin',
        name: 'Victoria y martin',
        tickets: 2
      },
      {
        params: 'hermelinda-santana',
        name: 'Hermelinda Santana',
        tickets: 4
      },
      {
        params: 'fam-mendieta-laguna',
        name: 'Fam. Mendieta Laguna',
        tickets: 4
      },
      {
        params: 'jorge-contreras',
        name: 'Jorge Contreras',
        tickets: 2
      },
      {
        params: 'guadalupe',
        name: 'Guadalupe',
        tickets: 2
      },
      {
        params: 'graciela',
        name: 'Graciela',
        tickets: 2
      },
      {
        params: 'rosa',
        name: 'Rosa',
        tickets: 2
      },
      {
        params: 'alejandro-flores',
        name: 'Alejandro Flores',
        tickets: 2
      },
      {
        params: 'daniel-diaz',
        name: 'Daniel Diaz',
        tickets: 3
      },
      {
        params: 'doc-eduardo',
        name: 'Doc. Eduardo',
        tickets: 2
      },
      {
        params: 'victor-gonzalez',
        name: 'Victor Gonzalez',
        tickets: 2
      },
      {
        params: 'cecilia',
        name: 'Cecilia',
        tickets: 2
      },
      {
        params: 'fam-vallejo-hernandez',
        name: 'Fam. Vallejo Hernandez',
        tickets: 2
      },
      {
        params: 'laura-vallejo',
        name: 'Laura vallejo',
        tickets: 2
      },
      {
        params: 'emmanuel-vallejo',
        name: 'Emmanuel Vallejo',
        tickets: 3
      },
      {
        params: 'josefina-vallejo',
        name: 'Josefina Vallejo',
        tickets: 2
      },
      {
        params: 'lucia-vallejo',
        name: 'Lucia Vallejo',
        tickets: 3
      },
      {
        params: 'rafael-vallejo',
        name: 'Rafael Vallejo',
        tickets: 2
      },
      {
        params: 'antonio-hernandez',
        name: 'Antonio Hernandez',
        tickets: 2
      },
      {
        params: 'fam-escobar-juana',
        name: 'Fam. Escobar (juana)',
        tickets: 2
      },
      {
        params: 'alejandra-hernandez',
        name: 'Alejandra Hernandez',
        tickets: 6
      },
      {
        params: 'margarita-hernandez',
        name: 'Margarita Hernandez',
        tickets: 3
      },
      {
        params: 'guadalupe-hernandez',
        name: 'Guadalupe Hernandez',
        tickets: 2
      },
      {
        params: 'eduardo-nery-hernandez',
        name: 'Eduardo Nery Hernandez',
        tickets: 3
      },
      {
        params: 'rafael-avendaño',
        name: 'Rafael Avendaño',
        tickets: 2
      },
      {
        params: 'facundo-escobar',
        name: 'Facundo Escobar',
        tickets: 2
      },
      {
        params: 'juan-manuel-hernandez',
        name: 'Juan Manuel Hernandez',
        tickets: 2
      },
      {
        params: 'susana-escobar',
        name: 'Susana Escobar',
        tickets: 2
      },
      {
        params: 'francisco-y-karina escobar',
        name: 'Francisco y karina Escobar',
        tickets: 2
      },
      {
        params: 'angeles-escobar',
        name: 'Angeles Escobar',
        tickets: 2
      },
      {
        params: 'carmen-escobar',
        name: 'Carmen Escobar',
        tickets: 2
      },
      {
        params: 'alejandra-escobar',
        name: 'Alejandra Escobar',
        tickets: 2
      },
      {
        params: 'fam-brisia',
        name: 'Fam. Brisia',
        tickets: 6
      },
      {
        params: 'prisi',
        name: 'Prisi',
        tickets: 1
      },
      {
        params: 'carmen',
        name: 'Carmen',
        tickets: 1
      },
  
      
      {
        params: 'jazmin-flores',
        name: 'Jazmín Flores',
        tickets: 2
      },
      {
        params: 'jose-vallejo',
        name: 'José Vallejo',
        tickets: 1
      },
    ]
    this.isInvited
  }
  isInvited = (params) => this.invited.forEach(invite => {
    if(invite.params == params){
      return invite
    }
  })
  
}

export default InvitedPeople
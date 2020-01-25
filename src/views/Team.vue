<template>
  <div class="about">
    <h1 class="subtitle-1 grey--text">Let's meet my Supervisor and Our Project Manager </h1>
    <v-container>
      <v-row class="justify-center">
        <teamMember v-for="member in members" :key="member.id" :member="member"/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import teamMember from '../components/TeamModel'
export default {
  components:{
    teamMember
  },
  data:()=>({
    members:[
      {id: 1, name: 'Joseph Jacky', image:'profile.jpg', position: 'Supervisor,Frontend Developer, Prochito Its'},
      {id: 2, name: 'Musa Hasan', image:'musa.jpg', position: 'Frontend Developer(int.) Prochito Its LTd.'},
      {id: 3, name: 'Rony Debnath', image:'profile1.jpg', position: 'Our Project Manager, Prochito Its LTd.'}
    ]
  })
}
</script>

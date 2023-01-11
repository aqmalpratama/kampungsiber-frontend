<template>
  <section class="pt-3">
    <div class="container shadow p-3 bg-body rounded">
      <h3><strong>Mentor Request</strong></h3>
      <div class="table-resposive">
        <DataTable
          class="table table-striped table-bordered display"
          :data="mentors"
          :columns="columns"
          :options="{ responsive: true, autoWidth: false }"
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Linkedin</th>
              <th>Spesialis</th>
              <th>Rate per Hour</th>
              <th>Action</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* @import "datatables.net-dt"; */
section {
  font-family: "Poppins", sans-serif;
  margin-top: 56px;
  color: #000 !important;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";

DataTable.use(DataTablesLib);

const columns = [
  {
    data: null,
    render: function (data: any, type: any, row: any, meta: any) {
      return meta.row + 1;
    },
  },
  { data: "full_name" },
  { data: "email" },
  {
    data: "linkedin",
    render: function (data: any) {
      return `<a href="${data}" target="_blank" class="badge bg-info" style="text-decoration: none">Linkedin</a>`;
    },
  },
  { data: "stack_name" },
  {
    data: "rate_per_hour",
    render: function (data: any) {
      return Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(data);
    },
  },
  {
    data: "user_id",
    render: function (data: any) {
      return `<a href="/profile/approval/${data}" class="btn btn-primary btn-sm" style="text-decoration: none">Process</a>`;
    },
  },
];
export default defineComponent({
  name: "MentorRequest",
  components: {
    DataTable,
  },
  props: ["user"],
  data() {
    return {
      mentors: null,
      columns: columns,
      myAttribute: null,
    };
  },
  mounted() {
    this.getMentors();
  },
  methods: {
    getMentors() {
      axios
        .get("http://localhost:5000/admin/waitinglist-mentor")
        .then((response) => {
          this.mentors = response.data;
          console.log(this.mentors);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

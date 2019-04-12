<template>
    <div>
        <div class="add-btn">
            <Button type="primary" @click="modal = true">增加</Button>
        </div>
        <Table :columns="columns" :data="data"></Table>
        <Modal
            v-model="modal"
            title="增加图表"
            @on-cancel="cancel"
        >
            
            <Form ref="formInline" :model="formInline" :rules="ruleInline" vertical>
                <Row>
                    <Col span="10">
                        <FormItem prop="user" label="用户名">
                            <Input type="text" v-model="formInline.user" placeholder="用户名">
                            </Input>
                        </FormItem>
                    </Col> 
                    <Col span="10" offset="2">
                        <FormItem prop="pwd" label="密码">
                            <Input type="password" v-model="formInline.pwd" placeholder="密码">
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                
                
            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="cancel">取消</Button>
                <Button type="primary" size="large" @click="ok">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'production',
    data(){
        return {
            columns: [
                {
                    title: 'ID',
                    key: 'chartSecondType'
                },
                {
                    title: '名称',
                    key: 'chartName',
                },
                {
                    title: '操作',
                    key: 'chartId',
                    render: (h, record) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px',
                                },
                                on: {
                                    click: () => {
                                        this.edit(record.row, 'edit')
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.edit(record.row, 'del')
                                    }
                                }
                            }, '删除'),
                        ])
                    },
                }
            ],
            modal: false,
            formInline: {
                user: '',
                pwd: ''
            },
            ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少是6位字符', trigger: 'blur' }
                    ]
                }
        }
    },
    computed: {
        data: function(){
            return this.$store.state.test.data;
        }
    },

    methods: {
        edit: function(record, key){
            
        },
        add: function(){

        },
        cancel: function(){
            this.$refs['formInline'].resetFields();
            this.modal = false;
        },
        ok() {
            this.$refs['formInline'].validate((values) => {
                if (values) {
                    console.log(this.formInline, '')
                } else {
                    
                }
            })
        }
    },
    mounted(){
        this.$store.dispatch('test/fetch', {
            id: 5,
        })
    }
}
</script>

<style lang="less" scoped>
    .add-btn{
        margin-bottom: 20px;
    }
</style>



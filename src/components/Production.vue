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
        <pre>
            {{cachdata[0]}}
            {{origindata[0]}}
            {{data[0]}}
        </pre>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'production',
    data(){
        return {
            columns: [
                {
                    title: 'ID',
                    key: 'chartSecondType',
                    render: (h, record) => {
                        if(record.row.editable){
                            return h('Input', {
                                props: {
                                    'value': record.row.chartSecondType,  
                                },
                                on: {
                                    'on-change': (e)=>{
                                        this.changeValue(e, record, 'chartSecondType');
                                    },
                                    // 'on-focus': (e)=>{
                                    //     this._focus(e, record.row, 'chartSecondType');
                                    // },
                                    // 'on-blur': (e)=>{
                                    //     this._blur(e, record.row, 'chartSecondType')
                                    // }
                                }
                            })
                        }
                        return h('span', record.row.chartSecondType)
                    }
                },
                {
                    title: '名称',
                    key: 'chartName',
                    render: (h, record) => {
                        if(record.row.editable){
                            return h('Input', {
                                props: {
                                    value: record.row.chartName,
                                },
                                on: {
                                    'on-change': (e)=>{
                                        this.changeValue(e, record, 'chartName');
                                    },
                                    // 'on-focus': (e)=>{
                                    //     this._focus(e, record.row, 'chartName');
                                    // },
                                    // 'on-blur': (e)=>{
                                    //     this._blur(e, record.row, 'chartName')
                                    // }
                                }
                            })
                        }
                        return h('span', record.row.chartName)
                    }
                },
                {
                    title: '操作',
                    key: 'chartId',
                    render: (h, record) => {
                        if(record.row.editable){
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
                                            this.edit(record.row, 'cancel')
                                        }
                                    }
                                }, '取消'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(record.row, 'save')
                                        }
                                    }
                                }, '保存'),
                            ])
                        }
                        
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
                                    size: 'small',
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
            },
            data: [],
            origindata: [],
            cachdata: [],
        }
    },
    // computed: {
    //     data: function(){
    //         return this.$store.state.test.data;
    //     }
    // },
    methods: {
        edit: function(row, key){
            if(key === 'edit'){
                const _row = {...row};
                _row.editable = !row.editable;
                const _data = this.data.map(item=> {
                    if(item.chartId === row.chartId){
                        return _row;
                    }
                    return item;
                })
                this.data = _data;
            }
            if(key === 'cancel'){
                this.data = this.origindata
            }
            if(key === 'save'){
                console.log(this.cachdata, this.origindata)
            }
        },
        add: function(){

        },
        cancel: function(){
            this.$refs['formInline'].resetFields();
            this.modal = false;
        },
        ok: function() {
            this.$refs['formInline'].validate((values) => {
                if (values) {
                    console.log(this.formInline, '')
                } else {
                    
                }
            })
        },
        changeValue: function(e, record, key){
            this.cachdata[record.index][key] = e.target.value;
        },
    },
    mounted(){
        this.$store.dispatch('test/fetch', {
            id: 5,
        }).then(res => {
            if(res && res.code === 0){
                this.data = res.data.dataList;
                this.origindata = _.cloneDeep(res.data.dataList);
                this.cachdata = _.cloneDeep(res.data.dataList);
            }
        })


        let a = [1, 2, 3]
        let b = a;
        let c = a;
        let d = a;
        c[1] = 4;
        console.log(a,b, c, d)
    },
}
</script>

<style lang="less" scoped>
    .add-btn{
        margin-bottom: 20px;
    }
</style>



"""empty message

Revision ID: 53ccf269aec7
Revises: 5d1c4f40e466
Create Date: 2023-04-13 16:54:33.703593

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53ccf269aec7'
down_revision = '5d1c4f40e466'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(length=600), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.drop_column('description')

    # ### end Alembic commands ###
